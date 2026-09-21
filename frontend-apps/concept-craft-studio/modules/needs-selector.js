/**
 * S03: PHILOSOPHY & LIVING JADE FAN MODULE — XLINHX JADE BOOK JOURNEY
 * "Mở ra cách làm nhẹ hơn. Rõ việc cần làm. Có chỗ để tiến xa."
 *
 * Tính năng chính:
 * 1. WebGL Living Mesh: Mô phỏng dao động cơ học của 3 cánh lá ngọc dựng đứng
 *    ở phần ngọn và đỉnh (chân đế và bàn gốm giữ nguyên 100% vững chãi).
 * 2. Vệt sáng phản quang caustics lấp lánh theo thời gian thực.
 * 3. IntersectionObserver: Tự động tạm dừng render khi cuộn khỏi màn hình để tối ưu pin & GPU.
 */

(function() {
  'use strict';

  function initNeedsSelector() {
    const canvas = document.getElementById('s03-canvas');
    const s03Section = document.getElementById('needs');
    if (!canvas || !s03Section) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'high-performance' }) ||
               canvas.getContext('experimental-webgl');

    if (!gl) {
      console.info('[S03] WebGL not supported, fallback to static daylight backdrop.');
      return;
    }

    // Vertex Shader: Dao động ở đỉnh các cánh lá dựng đứng
    const vsSource = `
      precision mediump float;
      attribute vec2 a_pos;
      attribute vec2 a_uv;
      varying vec2 v_uv;
      uniform float u_time;

      void main() {
        v_uv = a_uv;
        vec2 pos = a_pos;

        // Vị trí trục khuy ngọc trung tâm: (0.605, 0.775)
        // Chỉ tác động lên các phần phía trên trục khuy (a_uv.y < 0.775)
        float heightRatio = clamp((0.775 - a_uv.y) / 0.68, 0.0, 1.0);
        float factor = pow(heightRatio, 1.75);

        // Dao động điều hòa riêng biệt cho từng phiến lá dựng đứng
        // Phiến 1 (Cánh trái, xung quanh uv.x = 0.38)
        float w1 = exp(-pow((a_uv.x - 0.38) / 0.13, 2.0));
        float sway1 = sin(u_time * 2.1) * 0.042;

        // Phiến 2 (Cánh giữa cao nhất, xung quanh uv.x = 0.58)
        float w2 = exp(-pow((a_uv.x - 0.58) / 0.11, 2.0));
        float sway2 = sin(u_time * 1.6 + 1.4) * 0.036;

        // Phiến 3 (Cánh phải, xung quanh uv.x = 0.78)
        float w3 = exp(-pow((a_uv.x - 0.78) / 0.13, 2.0));
        float sway3 = sin(u_time * 2.4 + 2.8) * 0.046;

        // Vi rung động hữu cơ ở ngọn đỉnh lá
        float microFlutter = sin(u_time * 4.5 + a_uv.x * 14.0) * 0.009 * pow(heightRatio, 2.4);

        float totalSway = (w1 * sway1 + w2 * sway2 + w3 * sway3 + microFlutter) * factor;

        // Biến dạng ngang ở phần ngọn
        pos.x += totalSway;

        // Độ võng tự nhiên khi uốn cong
        pos.y -= abs(totalSway) * 0.28 * factor;

        gl_Position = vec4(pos, 0.0, 1.0);
      }
    `;

    // Fragment Shader: Texture ngọc bích & vệt sáng caustics lung linh
    const fsSource = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_image;
      uniform float u_time;

      void main() {
        vec4 color = texture2D(u_image, v_uv);

        // Vệt sáng caustics tự nhiên lấp lánh trên chất ngọc
        if (v_uv.y < 0.76 && v_uv.x > 0.24) {
          float caustic = sin(v_uv.x * 24.0 + u_time * 1.8) * cos(v_uv.y * 16.0 - u_time * 1.3);
          color.rgb += vec3(0.035, 0.07, 0.05) * max(0.0, caustic);
        }

        gl_FragColor = color;
      }
    `;

    function createShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const aPosLoc = gl.getAttribLocation(program, 'a_pos');
    const aUvLoc = gl.getAttribLocation(program, 'a_uv');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uImageLoc = gl.getUniformLocation(program, 'u_image');

    // Tạo Mesh lưới 64 x 48 để uốn cong mượt mà
    const COLS = 64;
    const ROWS = 48;
    const positions = [];
    const uvs = [];
    const indices = [];

    for (let r = 0; r <= ROWS; r++) {
      const v = r / ROWS;
      const y = 1.0 - 2.0 * v;
      for (let c = 0; c <= COLS; c++) {
        const u = c / COLS;
        const x = -1.0 + 2.0 * u;
        positions.push(x, y);
        uvs.push(u, v);
      }
    }

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i0 = r * (COLS + 1) + c;
        const i1 = i0 + 1;
        const i2 = i0 + (COLS + 1);
        const i3 = i2 + 1;
        indices.push(i0, i2, i1);
        indices.push(i1, i2, i3);
      }
    }

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Tải ảnh texture chính
    const texture = gl.createTexture();
    const image = new Image();
    image.crossOrigin = 'anonymous';
    let textureLoaded = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);
      if (width > 0 && height > 0 && (canvas.width !== width || canvas.height !== height)) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    }

    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      resize();
      textureLoaded = true;
      canvas.classList.add('is-ready');
      render();
    };

    image.src = 'assets/scenes/s03-jade-fan-daylight.webp';

    window.addEventListener('resize', resize, { passive: true });
    resize();

    let isVisible = true;
    let animId = null;
    const startTime = performance.now();

    function render() {
      if (!textureLoaded || !isVisible) return;
      resize();

      const currentTime = (performance.now() - startTime) / 1000;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.enableVertexAttribArray(aPosLoc);
      gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
      gl.enableVertexAttribArray(aUvLoc);
      gl.vertexAttribPointer(aUvLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(uTimeLoc, currentTime);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(uImageLoc, 0);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

      animId = requestAnimationFrame(render);
    }

    // Tối ưu hóa hiệu năng: Chỉ render khi Section 3 xuất hiện trong tầm mắt và không phải mobile hẹp
    function checkMobile() {
      return window.innerWidth <= 768;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting && !checkMobile();
          if (isVisible) {
            cancelAnimationFrame(animId);
            animId = requestAnimationFrame(render);
          } else {
            cancelAnimationFrame(animId);
          }
        });
      }, { threshold: 0.05 });

      observer.observe(s03Section);
    } else {
      if (!checkMobile()) render();
    }
  }

  window.initNeedsSelector = initNeedsSelector;
})();
