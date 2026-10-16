import * as THREE from 'https://unpkg.com/three@0.184.0/build/three.module.js';

/* <chrome-hero> — the logo's wifi-signal arc as melted chrome, self-rotating.
   Attributes: melt="1.15" speed="1" */

const MELT_COMMON = /* glsl */`
uniform float uTime;
uniform float uMelt;
float nofHash(vec3 p){
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}
float nofNoise(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = nofHash(i + vec3(0.0,0.0,0.0));
  float n100 = nofHash(i + vec3(1.0,0.0,0.0));
  float n010 = nofHash(i + vec3(0.0,1.0,0.0));
  float n110 = nofHash(i + vec3(1.0,1.0,0.0));
  float n001 = nofHash(i + vec3(0.0,0.0,1.0));
  float n101 = nofHash(i + vec3(1.0,0.0,1.0));
  float n011 = nofHash(i + vec3(0.0,1.0,1.0));
  float n111 = nofHash(i + vec3(1.0,1.0,1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z);
}
float nofDisp(vec3 p){
  float a = nofNoise(p * 1.05 + vec3(0.0, uTime * 0.22, uTime * 0.06));
  float b = nofNoise(p * 2.60 - vec3(uTime * 0.18, 0.0, uTime * 0.11));
  float c = nofNoise(p * 6.40 + vec3(uTime * 0.09));
  return ((a - 0.5) * 0.235 + (b - 0.5) * 0.085 + (c - 0.5) * 0.022) * uMelt;
}
`;

function meltMaterial(uniforms, color) {
  const m = new THREE.MeshPhysicalMaterial({
    color,
    metalness: 1.0,
    roughness: 0.018,
    envMapIntensity: 1.7,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02
  });
  m.precision = 'highp';
  m.name = 'liquid-chrome';
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uMelt = uniforms.uMelt;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n' + MELT_COMMON)
      .replace('#include <beginnormal_vertex>', /* glsl */`
        vec3 objectNormal = vec3(normal);
        {
          vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
          float e = 0.055;
          vec3 ref = abs(normal.z) < 0.9 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
          vec3 t1 = normalize(cross(normal, ref));
          vec3 t2 = normalize(cross(normal, t1));
          float d0 = nofDisp(wp);
          float d1 = nofDisp(wp + t1 * e);
          float d2 = nofDisp(wp + t2 * e);
          objectNormal = normalize(objectNormal - (t1 * (d1 - d0) + t2 * (d2 - d0)) * (1.8 / e) * 0.06);
        }
      `)
      .replace('#include <begin_vertex>', /* glsl */`
        vec3 transformed = vec3(position);
        {
          vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
          transformed += normal * nofDisp(wp);
        }
      `);
  };
  return m;
}

function envTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const g = c.getContext('2d');

  const sky = g.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0.00, '#0b0c12');
  sky.addColorStop(0.22, '#4d525f');
  sky.addColorStop(0.38, '#c9cfda');
  sky.addColorStop(0.48, '#ffffff');
  sky.addColorStop(0.58, '#ffffff');
  sky.addColorStop(0.66, '#8e95a3');
  sky.addColorStop(0.80, '#23242e');
  sky.addColorStop(1.00, '#0d0d13');
  g.fillStyle = sky;
  g.fillRect(0, 0, 1024, 512);

  const blob = (x, y, r, color, alpha) => {
    const rg = g.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, color);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    g.globalAlpha = alpha;
    g.fillStyle = rg;
    g.fillRect(x - r, y - r, r * 2, r * 2);
    g.globalAlpha = 1;
  };

  blob(150, 330, 210, '#ff2d7f', 0.5);
  blob(720, 300, 230, '#8b2be2', 0.46);
  blob(440, 120, 130, '#ff2d7f', 0.16);
  blob(920, 390, 150, '#00e5ff', 0.14);
  blob(580, 430, 130, '#b6ff2e', 0.08);

  g.globalAlpha = 1;
  g.fillStyle = '#ffffff';
  g.fillRect(0, 232, 1024, 34);
  g.globalAlpha = 0.8;
  g.fillRect(180, 86, 260, 16);
  g.fillRect(700, 120, 300, 12);
  g.globalAlpha = 0.55;
  g.fillRect(0, 300, 1024, 9);
  g.fillRect(430, 168, 170, 7);
  g.globalAlpha = 0.35;
  g.fillRect(60, 196, 120, 5);
  g.fillRect(860, 204, 140, 5);
  g.globalAlpha = 1;

  const tex = new THREE.Texture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/* The signal arc: three concentric broadcast bands over a source dot.
   Built as tube-thick torus arcs so the melt reads across the whole form. */
function signalGroup(mat, detail) {
  const g = new THREE.Group();
  g.name = 'signal-arc';

  const seg = detail === 'low' ? [22, 100] : [24, 120];
  const sphereSeg = detail === 'low' ? [36, 28] : [40, 32];

  const bands = [
    { R: 0.56, r: 0.125 },
    { R: 1.14, r: 0.125 },
    { R: 1.62, r: 0.125 }
  ];
  const spread = Math.PI * 0.72; // ~130° fan — the logo's signal arc

  bands.forEach((b, i) => {
    const band = new THREE.Group();
    band.name = 'band-' + (i + 1);
    const arc = new THREE.Mesh(new THREE.TorusGeometry(b.R, b.r, seg[0], seg[1], spread), mat);
    arc.name = 'arc-' + (i + 1);
    band.add(arc);
    // round the cut ends so the arcs read as drawn strokes, not tubes
    [0, spread].forEach((t, k) => {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(b.r, sphereSeg[0], sphereSeg[1]), mat);
      cap.name = 'cap-' + (i + 1) + '-' + k;
      cap.position.set(Math.cos(t) * b.R, Math.sin(t) * b.R, 0);
      band.add(cap);
    });
    band.rotation.z = Math.PI / 2 - spread / 2;
    g.add(band);
  });

  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.245, sphereSeg[0], sphereSeg[1]), mat);
  dot.name = 'source';
  dot.position.set(0, 0, 0);
  g.add(dot);

  g.position.y = -0.62;
  return { group: g, size: { w: 3.5, h: 2.45 } };
}

class ChromeHero extends HTMLElement {
  connectedCallback() {
    if (this._booted) return;
    this._booted = true;

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>
      :host { display: block; position: relative; width: 100%; height: 100%; }
      canvas { display: block; width: 100%; height: 100%; }
    </style>`;

    const mobile = matchMedia('(max-width: 720px)').matches;
    const detail = mobile ? 'low' : 'high';

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.24;
    shadow.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const env = envTexture();
    scene.environment = env;

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

    const uniforms = {
      uTime: { value: 0 },
      uMelt: { value: parseFloat(this.getAttribute('melt') || '0.72') }
    };
    const mat = meltMaterial(uniforms, 0xffffff);

    const built = signalGroup(mat, detail);
    const group = built.group;
    scene.add(group);

    const p1 = new THREE.PointLight(0xff2d7f, 7, 12); p1.position.set(-3, 1.6, 3.4); scene.add(p1);
    const p2 = new THREE.PointLight(0x8b2be2, 5, 12); p2.position.set(3.2, -1.2, 2.6); scene.add(p2);
    const rim = new THREE.DirectionalLight(0xffffff, 2.2); rim.position.set(0.4, 2.6, -2.2); scene.add(rim);

    const fit = () => {
      const w = this.clientWidth || 1;
      const h = this.clientHeight || 1;
      renderer.setSize(w, h, false);
      const aspect = w / h;
      camera.aspect = aspect;
      const vFov = camera.fov * Math.PI / 180;
      const dH = (built.size.h / 2) / Math.tan(vFov / 2);
      const dW = (built.size.w / 2) / (Math.tan(vFov / 2) * aspect);
      camera.position.set(0, 0, Math.max(dH, dW) * 1.08);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    };
    fit();
    this._ro = new ResizeObserver(fit);
    this._ro.observe(this);

    const speed = parseFloat(this.getAttribute('speed') || '1');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let visible = true;
    this._io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    this._io.observe(this);

    const tick = () => {
      this._raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();
      uniforms.uTime.value = reduced ? 0 : t * speed;
      group.rotation.y = reduced ? -0.3 : Math.sin(t * 0.19 * speed) * 0.55;
      group.rotation.x = reduced ? 0.06 : Math.sin(t * 0.14 * speed) * 0.11;
      group.rotation.z = reduced ? 0 : Math.sin(t * 0.10 * speed) * 0.06;
      renderer.render(scene, camera);
    };
    tick();

    this._cleanup = () => {
      cancelAnimationFrame(this._raf);
      this._ro && this._ro.disconnect();
      this._io && this._io.disconnect();
      renderer.dispose();
      env.dispose();
    };
  }

  disconnectedCallback() { this._cleanup && this._cleanup(); }
}

if (!customElements.get('chrome-hero')) customElements.define('chrome-hero', ChromeHero);
