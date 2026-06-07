// Three.js r160 loaded via UMD script tag (global THREE)




// ============ UNIFIED ENTRANCE FLOW (Anti-Flicker) ============
(function() {
  function showPage() {
    document.documentElement.classList.add('fonts-loaded');
    document.documentElement.classList.add('hero-ready');
  }

  // Fallback timeout to ensure page displays even if fonts fetch hangs (e.g. offline/strict CSP)
  const fallback = setTimeout(showPage, 800);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      clearTimeout(fallback);
      requestAnimationFrame(showPage);
    }).catch(function() {
      clearTimeout(fallback);
      showPage();
    });
  } else {
    clearTimeout(fallback);
    showPage();
  }
})();

// ============ UTILS ============
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

// ============ THREE.JS — GLOBE ============
(function() {
  const canvas = document.getElementById('canvas3d');
  if (!canvas) return;

  function triggerFallback() {
    console.warn('Three.js initialization failed or CSP blocked. Triggering CSS fallback globe.');
    document.documentElement.classList.add('webgl-failed');
    if (canvas) canvas.style.display = 'none';
  }

  if (typeof THREE === 'undefined') {
    triggerFallback();
    return;
  }

  // Wrap entire Three.js setup in a try-catch for strict/Brave CSP compliance
  try {
    // Test WebGL support on a DUMMY canvas to avoid locking the main canvas context
    const dummyCanvas = document.createElement('canvas');
    const testCtx = dummyCanvas.getContext('webgl2') || dummyCanvas.getContext('webgl');
    if (!testCtx) {
      triggerFallback();
      return;
    }
    // Dispose dummy immediately
    dummyCanvas.width = 0;
    dummyCanvas.height = 0;

    // Renderer — main canvas is untouched, Three.js creates its own context
    const renderer = new THREE.WebGLRenderer({
      canvas, alpha: true, antialias: true, powerPreference: 'high-performance'
    });

    // Verify renderer actually acquired a GL context (catches silent Brave failures)
    if (!renderer.getContext()) {
      triggerFallback();
      return;
    }
    
    function setSize() {
      const w = canvas.clientWidth || canvas.offsetWidth || 600;
      const h = canvas.clientHeight || canvas.offsetHeight || 600;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6.2);
    setSize();

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(5, 5, 6); scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x6E56CF, 1.2);
    rimLight.position.set(-5, 2, -3); scene.add(rimLight);
    const accentLight = new THREE.PointLight(0x1F6FEB, 3.0, 14);
    accentLight.position.set(0, 0, 4); scene.add(accentLight);
    const fillLight = new THREE.PointLight(0xFF6B35, 1.2, 10);
    fillLight.position.set(-3, -3, 2); scene.add(fillLight);

    // Env map
    const envC = document.createElement('canvas');
    envC.width = 512; envC.height = 256;
    const ec = envC.getContext('2d');
    const eg = ec.createLinearGradient(0, 0, 0, 256);
    eg.addColorStop(0, '#fff'); eg.addColorStop(0.4, '#E8F0FF');
    eg.addColorStop(0.7, '#6E56CF'); eg.addColorStop(1, '#1F6FEB');
    ec.fillStyle = eg; ec.fillRect(0, 0, 512, 256);
    const envTex = new THREE.CanvasTexture(envC);
    envTex.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envTex;

    const group = new THREE.Group();

    // ── Globe texture (procedural) ──
    function buildGlobeTex(w, h) {
      const tc = document.createElement('canvas');
      tc.width = w; tc.height = h;
      const cx = tc.getContext('2d');

      // Ocean
      const og = cx.createLinearGradient(0, 0, 0, h);
      og.addColorStop(0, '#071525'); og.addColorStop(0.35, '#0d2a50');
      og.addColorStop(0.5, '#0f3060'); og.addColorStop(0.65, '#0d2a50');
      og.addColorStop(1, '#071525');
      cx.fillStyle = og; cx.fillRect(0, 0, w, h);

      // Ocean shimmer
      for (let i = 0; i < 150; i++) {
        const x = Math.random()*w, y = h*0.1 + Math.random()*h*0.8;
        const r = 0.5 + Math.random()*3;
        const a = 0.04 + Math.random()*0.10;
        const g2 = cx.createRadialGradient(x,y,0,x,y,r*7);
        g2.addColorStop(0,'rgba(120,200,255,'+a+')'); g2.addColorStop(1,'rgba(0,0,0,0)');
        cx.fillStyle = g2; cx.beginPath(); cx.arc(x,y,r*7,0,Math.PI*2); cx.fill();
      }

      // Land blobs with internal gradient
      function land(px,py,rx,ry,rot,rc,gc,bc,a) {
        cx.save(); cx.globalAlpha = a;
        const lg = cx.createRadialGradient(px-rx*.2,py-ry*.2,0,px,py,Math.max(rx,ry));
        lg.addColorStop(0,'rgb('+(rc+30)+','+(gc+25)+','+(bc+15)+')');
        lg.addColorStop(0.5,'rgb('+rc+','+gc+','+bc+')');
        lg.addColorStop(1,'rgb('+(rc-25)+','+(gc-20)+','+(bc-15)+')');
        cx.fillStyle = lg; cx.translate(px,py); cx.rotate(rot);
        cx.beginPath(); cx.ellipse(0,0,rx,ry,0,0,Math.PI*2); cx.fill();
        cx.restore();
      }
      // Eurasia
      land(w*.585,h*.30,w*.195,h*.115,0.18, 52,100,42, 0.92);
      land(w*.640,h*.26,w*.095,h*.065,-0.25,100,115,90,0.78);
      land(w*.520,h*.33,w*.075,h*.055,0.45, 52,100,42, 0.72);
      land(w*.620,h*.20,w*.130,h*.060,0.05, 100,115,90,0.65);
      land(w*.625,h*.42,w*.038,h*.075,0.08, 52,100,42, 0.82);
      land(w*.700,h*.44,w*.045,h*.040,0.20, 52,100,42, 0.75);
      land(w*.600,h*.40,w*.040,h*.045,0.15, 160,130,70,0.80);
      // Africa
      land(w*.520,h*.50,w*.072,h*.135,0.08, 88,120,50, 0.88);
      land(w*.530,h*.44,w*.050,h*.040,-0.10,160,130,70,0.82);
      land(w*.540,h*.60,w*.048,h*.055,0.05, 52,100,42, 0.75);
      // North America
      land(w*.175,h*.28,w*.125,h*.125,-0.28,52,100,42, 0.88);
      land(w*.130,h*.22,w*.060,h*.048,0.35, 100,115,90,0.72);
      land(w*.270,h*.17,w*.042,h*.052,0.08, 210,225,235,0.75);
      // South America
      land(w*.235,h*.54,w*.068,h*.135,0.18, 52,100,42, 0.85);
      land(w*.240,h*.68,w*.040,h*.045,0.25, 110,95,75, 0.70);
      // Australia
      land(w*.760,h*.60,w*.075,h*.060,0.25, 160,130,70,0.82);
      // Antarctica / Arctic
      land(w*.50,h*.935,w*.320,h*.055,0,    210,225,235,0.70);
      land(w*.50,h*.035,w*.280,h*.040,0,    210,225,235,0.55);

      // Coastline highlight
      cx.globalAlpha = 0.13; cx.strokeStyle = '#88ccff'; cx.lineWidth = 1.2;
      [[w*.585,h*.30,w*.198,h*.118,0.18],[w*.520,h*.50,w*.075,h*.138,0.08],
       [w*.175,h*.28,w*.128,h*.128,-0.28],[w*.235,h*.54,w*.070,h*.138,0.18],
       [w*.760,h*.60,w*.078,h*.063,0.25]].forEach(function(c){
        cx.save(); cx.translate(c[0],c[1]); cx.rotate(c[4]);
        cx.beginPath(); cx.ellipse(0,0,c[2],c[3],0,0,Math.PI*2); cx.stroke();
        cx.restore();
      });
      cx.globalAlpha = 1;

      // Grid lines
      cx.globalAlpha = 0.07; cx.strokeStyle = '#5599dd'; cx.lineWidth = 0.6;
      for (let lat=-80;lat<=80;lat+=20){const y2=h*(0.5-lat/180);cx.beginPath();cx.moveTo(0,y2);cx.lineTo(w,y2);cx.stroke();}
      for (let lon=0;lon<360;lon+=30){const x2=w*lon/360;cx.beginPath();cx.moveTo(x2,0);cx.lineTo(x2,h);cx.stroke();}
      cx.globalAlpha = 1;

      // Clouds
      cx.globalAlpha = 0.16; cx.fillStyle = '#d0e8f8';
      for (let i=0;i<25;i++){const cx3=Math.random()*w,cy3=Math.random()*h,rw=15+Math.random()*70,rh=5+Math.random()*18;cx.beginPath();cx.ellipse(cx3,cy3,rw,rh,Math.random()*.6,0,Math.PI*2);cx.fill();}
      cx.globalAlpha = 1;

      // Sun specular
      const sg = cx.createRadialGradient(w*.35,h*.30,0,w*.35,h*.30,w*.35);
      sg.addColorStop(0,'rgba(255,240,200,0.12)'); sg.addColorStop(0.4,'rgba(200,220,255,0.06)'); sg.addColorStop(1,'rgba(0,0,0,0)');
      cx.fillStyle = sg; cx.fillRect(0,0,w,h);

      // Day/night terminator
      const tg = cx.createLinearGradient(w*.65,0,w*.85,0);
      tg.addColorStop(0,'rgba(0,0,0,0)'); tg.addColorStop(0.5,'rgba(0,5,20,0.22)'); tg.addColorStop(1,'rgba(0,5,20,0.50)');
      cx.fillStyle = tg; cx.fillRect(0,0,w,h);

      return tc;
    }

    function buildRoughTex(w,h) {
      const tc = document.createElement('canvas'); tc.width=w; tc.height=h;
      const cx = tc.getContext('2d');
      cx.fillStyle='#0a0a0a'; cx.fillRect(0,0,w,h);
      cx.fillStyle='#707070'; cx.globalAlpha=0.9;
      [[w*.585,h*.30,w*.195,h*.115,0.18],[w*.520,h*.50,w*.072,h*.135,0.08],
       [w*.175,h*.28,w*.125,h*.125,-0.28],[w*.235,h*.54,w*.068,h*.135,0.18],
       [w*.760,h*.60,w*.075,h*.060,0.25]].forEach(function(c){
        cx.save(); cx.translate(c[0],c[1]); cx.rotate(c[4]);
        cx.beginPath(); cx.ellipse(0,0,c[2],c[3],0,0,Math.PI*2); cx.fill();
        cx.restore();
      });
      return tc;
    }

    const globeTex = new THREE.CanvasTexture(buildGlobeTex(1024,512));
    const roughTex = new THREE.CanvasTexture(buildRoughTex(512,256));

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 64, 64),
      new THREE.MeshStandardMaterial({ map: globeTex, roughnessMap: roughTex, roughness: 0.50, metalness: 0.06, envMapIntensity: 1.6 })
    );
    group.add(globe);

    // Atmosphere
    const atmosMat = new THREE.MeshPhysicalMaterial({
      color: 0x3377ff, transparent: true, opacity: 0.10,
      side: THREE.FrontSide, depthWrite: false, blending: THREE.AdditiveBlending
    });
    group.add(new THREE.Mesh(new THREE.SphereGeometry(1.18,64,64), atmosMat));

    // Core glow
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x1F6FEB, transparent: true, opacity: 0.15 });
    group.add(new THREE.Mesh(new THREE.SphereGeometry(0.55,32,32), coreMat));

    // Graticule lines
    function buildGraticule(radius, latStep, lonStep) {
      const v = [];
      for (let lat=-80;lat<=80;lat+=latStep){
        const phi=(lat*Math.PI)/180;
        for (let lon=0;lon<360;lon+=4){
          const t1=(lon*Math.PI)/180, t2=((lon+4)*Math.PI)/180;
          v.push(radius*Math.cos(phi)*Math.cos(t1),radius*Math.sin(phi),radius*Math.cos(phi)*Math.sin(t1),
                 radius*Math.cos(phi)*Math.cos(t2),radius*Math.sin(phi),radius*Math.cos(phi)*Math.sin(t2));
        }
      }
      for (let lon=0;lon<360;lon+=lonStep){
        const theta=(lon*Math.PI)/180;
        for (let lat2=-88;lat2<88;lat2+=4){
          const p1=(lat2*Math.PI)/180, p2=((lat2+4)*Math.PI)/180;
          v.push(radius*Math.cos(p1)*Math.cos(theta),radius*Math.sin(p1),radius*Math.cos(p1)*Math.sin(theta),
                 radius*Math.cos(p2)*Math.cos(theta),radius*Math.sin(p2),radius*Math.cos(p2)*Math.sin(theta));
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(v,3));
      return geo;
    }
    group.add(new THREE.LineSegments(
      buildGraticule(1.115,20,30),
      new THREE.LineBasicMaterial({ color:0x4499ee, transparent:true, opacity:0.18 })
    ));

    // Orbital rings
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.0,0.007,8,120), new THREE.MeshBasicMaterial({color:0x1F6FEB,transparent:true,opacity:0.45}));
    ring1.rotation.x = Math.PI/2.5; ring1.rotation.z = 0.3; group.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.5,0.005,8,120), new THREE.MeshBasicMaterial({color:0x6E56CF,transparent:true,opacity:0.35}));
    ring2.rotation.x = Math.PI/3.2; ring2.rotation.y = 0.8; group.add(ring2);
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(3.0,0.004,8,120), new THREE.MeshBasicMaterial({color:0xFF6B35,transparent:true,opacity:0.25}));
    ring3.rotation.x = Math.PI/1.8; ring3.rotation.z = -0.5; group.add(ring3);

    // Satellites
    function makeSat(orbitR, tiltX, phase, color) {
      const pivot = new THREE.Object3D();
      pivot.rotation.x = tiltX; pivot.rotation.z = phase;
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.07,0.04,0.04),
        new THREE.MeshPhysicalMaterial({ color, metalness:0.9, roughness:0.2, envMapIntensity:1.5 })
      );
      body.position.x = orbitR;
      const panelMat = new THREE.MeshBasicMaterial({ color:0x1F6FEB, transparent:true, opacity:0.8 });
      const pGeo = new THREE.BoxGeometry(0.12,0.002,0.04);
      const pL = new THREE.Mesh(pGeo, panelMat); pL.position.x = -0.1;
      const pR = new THREE.Mesh(pGeo, panelMat); pR.position.x =  0.1;
      body.add(pL, pR);
      const orbitLine = new THREE.Mesh(
        new THREE.TorusGeometry(orbitR,0.003,6,80),
        new THREE.MeshBasicMaterial({ color, transparent:true, opacity:0.12 })
      );
      pivot.add(body, orbitLine);
      return { pivot, body, orbitR };
    }
    const sat1 = makeSat(1.85, 0.4,  0,   0xFFFFFF);
    const sat2 = makeSat(2.2,  1.1,  2.1, 0x88CCFF);
    const sat3 = makeSat(1.65, -0.7, 4.2, 0xFFAA44);
    group.add(sat1.pivot, sat2.pivot, sat3.pivot);

    // Particles — reduced from 80 to 40 for optimal rendering efficiency
    const PART_COUNT = 40;
    const partPositions = new Float32Array(PART_COUNT * 3);
    const partColors    = new Float32Array(PART_COUNT * 3);
    const partBaseY     = new Float32Array(PART_COUNT);
    for (let i = 0; i < PART_COUNT; i++) {
      const phi   = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r     = 2.0 + Math.random() * 1.8;
      partPositions[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      partPositions[i*3+1] = r * Math.cos(phi);
      partPositions[i*3+2] = r * Math.sin(phi) * Math.sin(theta);
      partBaseY[i] = partPositions[i*3+1];
      const c = i%3===0 ? [0.12,0.43,0.92] : i%3===1 ? [0.43,0.34,0.81] : [1.0,0.42,0.21];
      partColors[i*3]=c[0]; partColors[i*3+1]=c[1]; partColors[i*3+2]=c[2];
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPositions, 3));
    partGeo.setAttribute('color',    new THREE.BufferAttribute(partColors, 3));
    const particles = new THREE.Points(partGeo, new THREE.PointsMaterial({
      size:0.055, vertexColors:true, transparent:true, opacity:0.9,
      sizeAttenuation:true, blending:THREE.AdditiveBlending
    }));
    group.add(particles);

    scene.add(group);

    // Mouse tilt (smooth, clamped)
    let ttx = 0, tty = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', e => {
      ttx = ((e.clientX / window.innerWidth)  - 0.5) * 0.5;
      tty = ((e.clientY / window.innerHeight) - 0.5) * 0.4;
    });

    // Pause off-screen
    let visible = true;
    new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(canvas);

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (!visible) return;
      const t = clock.getElapsedTime();

      // Smooth mouse follow
      tx += (ttx - tx) * 0.05;
      ty += (tty - ty) * 0.05;

      // Globe rotation
      group.rotation.y = t * 0.10 + tx * 0.8;
      group.rotation.x = Math.sin(t * 0.2) * 0.05 + ty * 0.5;

      // Rings
      ring1.rotation.z = t * 0.30;
      ring2.rotation.z = -t * 0.18;
      ring3.rotation.z = t * 0.12;

      // Satellites
      sat1.body.position.x = Math.cos(t * 0.65) * sat1.orbitR;
      sat1.body.position.z = Math.sin(t * 0.65) * sat1.orbitR;
      sat2.body.position.x = Math.cos(-t * 0.45 + 2.1) * sat2.orbitR;
      sat2.body.position.z = Math.sin(-t * 0.45 + 2.1) * sat2.orbitR;
      sat3.body.position.x = Math.cos(t * 0.80 + 4.2) * sat3.orbitR;
      sat3.body.position.z = Math.sin(t * 0.80 + 4.2) * sat3.orbitR;

      // Atmosphere pulse
      atmosMat.opacity = 0.07 + Math.sin(t * 1.2) * 0.03;
      coreMat.opacity  = 0.12 + Math.sin(t * 1.6) * 0.05;

      // Particles
      const pos = particles.geometry.attributes.position.array;
      for (let i = 0; i < PART_COUNT; i++) {
        pos[i*3+1] = partBaseY[i] + Math.sin(t * 0.7 + i * 0.8) * 0.06;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = t * 0.03;

      try {
        renderer.render(scene, camera);
      } catch (e) {
        console.error('Three.js render failed mid-loop:', e);
        triggerFallback();
      }
    }
    animate();

    // Resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setSize, 100);
    });
  } catch (err) {
    console.error('WebGL/Three.js setup crash:', err);
    triggerFallback();
  }
})();



// ============ SCROLL PROGRESS ============
(function() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  let scrollTicking = false;
  function update() {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    scrollTicking = false;
  }
  window.addEventListener('scroll', function() {
    if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

// ============ CURSOR — using native cursor (custom cursor removed) ============

// ============ SCROLL PROGRESS BAR ============
// (already done above)

// ============ BUTTON RIPPLE ============
(function() {
  document.querySelectorAll('.btn-primary, .btn-secondary, .form button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const r    = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const x    = e.clientX - r.left - size/2;
      const y    = e.clientY - r.top  - size/2;
      const rip  = document.createElement('span');
      rip.className = 'ripple';
      rip.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      btn.appendChild(rip);
      setTimeout(() => rip.remove(), 600);
    });
  });
})();

// ============ WORK CARD 3D TILT ============
(function() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.work-card').forEach(card => {
    let tRaf;
    card.addEventListener('mousemove', e => {
      if (tRaf) cancelAnimationFrame(tRaf);
      tRaf = requestAnimationFrame(() => {
        const r  = card.getBoundingClientRect();
        const cx = r.left + r.width  / 2;
        const cy = r.top  + r.height / 2;
        const dx = (e.clientX - cx) / (r.width  / 2);
        const dy = (e.clientY - cy) / (r.height / 2);
        card.style.transform = `perspective(1000px) rotateY(${dx * 4}deg) rotateX(${-dy * 3}deg) translateY(-4px) scale(1.01)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      if (tRaf) cancelAnimationFrame(tRaf);
      card.style.transform = '';
    });
  });
})();

// ============ MAGNETIC BUTTONS (improved) ============
(function() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta').forEach(btn => {
    let hovered = false;
    let mRaf;
    btn.addEventListener('mouseenter', () => { hovered = true; });
    btn.addEventListener('mouseleave', () => {
      hovered = false;
      if (mRaf) cancelAnimationFrame(mRaf);
      btn.style.transform = '';
    });
    btn.addEventListener('mousemove', e => {
      if (!hovered) return;
      if (mRaf) cancelAnimationFrame(mRaf);
      mRaf = requestAnimationFrame(() => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width  / 2) * 0.14;
        const y = (e.clientY - r.top  - r.height / 2) * 0.20;
        btn.style.transform = `translate(${x}px,${y}px)`;
      });
    });
  });
})();

// ============ BENTO MOUSE GLOW ============
(function() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.bento-card').forEach(card => {
    let bRaf;
    card.addEventListener('mousemove', e => {
      if (bRaf) cancelAnimationFrame(bRaf);
      bRaf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top)  + 'px');
      });
    });
    card.addEventListener('mouseleave', () => {
      if (bRaf) cancelAnimationFrame(bRaf);
    });
  });
})();

// ============ SCROLL REVEAL (enhanced) ============
(function() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

  document.querySelectorAll('.fx, .fx-stagger, .fx-left, .fx-right, .fx-scale').forEach(el => io.observe(el));

  // Section headings: add fx class directly (no DOM injection)
  document.querySelectorAll('.section-head h2, .about h2, .philo-head h2').forEach(h2 => {
    if (!h2.classList.contains('fx')) {
      h2.classList.add('fx');
      io.observe(h2);
    }
  });
})();

// ============ WORKFLOW TIMELINE FILL ============
(function() {
  const grid     = document.querySelector('.workflow-grid');
  const progress = document.getElementById('workflow-progress');
  const steps    = document.querySelectorAll('.step');
  if (!grid || !progress || !steps.length) return;

  let wfTicking = false;
  function updateTimeline() {
    const r      = grid.getBoundingClientRect();
    const viewH  = window.innerHeight;
    const ratio  = Math.max(0, Math.min(1, (viewH - r.top) / (viewH + r.height)));
    const pct    = ratio * 100;
    progress.style.width = pct + '%';

    steps.forEach(function(step, i) {
      var threshold = (i / steps.length) * 85;
      if (pct >= threshold) {
        step.classList.add('active');
        step.classList.remove('inactive');
      } else {
        step.classList.remove('active');
        step.classList.add('inactive');
      }
    });
    wfTicking = false;
  }

  window.addEventListener('scroll', function() {
    if (!wfTicking) { wfTicking = true; requestAnimationFrame(updateTimeline); }
  }, { passive: true });
  // Also handle resize to recalculate on DevTools toggle
  window.addEventListener('resize', function() {
    if (!wfTicking) { wfTicking = true; requestAnimationFrame(updateTimeline); }
  }, { passive: true });
  updateTimeline();
})();

// ============ NAV ACTIVE SECTION ============
(function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => io.observe(s));
})();

// ============ HERO ENTRANCE (unified via font loading flow) ============

// ============ COUNT UP (vanilla, no GSAP) ============
(function() {
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    const plus = el.querySelector('.plus');
    const plusHTML = plus ? plus.outerHTML : '';
    const duration = 1800;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const val = Math.round(target * easeOutCubic(progress));
      el.innerHTML = val + plusHTML;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      animateCount(e.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => io.observe(el));
})();

// ============ FORM ============
function handleSubmit(e) {
  e.preventDefault();
  var btn  = e.target.querySelector('button[type="submit"]');
  var orig = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span>Đã gửi — sẽ liên hệ sớm</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
  setTimeout(function() { btn.innerHTML = orig; btn.disabled = false; e.target.reset(); }, 2400);
}
// Expose to global scope for inline HTML handlers (module scripts are scoped)
window.handleSubmit = handleSubmit;

// ============ SMOOTH ANCHOR ============
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
})();





// ============ FORM (replaced inline onsubmit) ============
(function() {
  var form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
})();

// ============ IMG ONERROR (replaced inline onerror) ============
(function() {
  document.querySelectorAll('.logo-item img').forEach(function(img) {
    img.addEventListener('error', function() { img.style.opacity = '0.3'; });
  });
})();
