import { Mesh, Program, Renderer, Triangle, Vec2, Vec4 } from "ogl";

const vertex = /* glsl */ `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

/**
 * Listening topography
 * Contours like a claim-map; soft dual presence; fog where certainty is refused.
 * Coherent with: contested machines, Relatronica, topographic granulation.
 */
const fragment = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerStrength;
uniform float uReduce;
uniform vec4 uNote;

varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p;
    a *= 0.5;
  }
  return v;
}

// Thin isoline around a scalar field
float isoline(float v, float density, float width) {
  float x = fract(v * density);
  float d = min(x, 1.0 - x);
  return smoothstep(width, 0.0, d);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float t = uTime * mix(0.12, 0.32, 1.0 - uReduce);

  // Listening probe (pointer) — attention that clarifies, not a neon warp
  vec2 pointer = (uPointer - 0.5) * vec2(aspect, 1.0);
  float listen = exp(-dot(p - pointer, p - pointer) * 3.4) * uPointerStrength;

  // —— Terrain of claims (topographic granulator language) ——
  vec2 q = p * 1.15;
  q += 0.28 * vec2(
    fbm(q + vec2(0.0, t * 0.22)),
    fbm(q + vec2(4.1, -t * 0.18))
  );
  // Breath: the map is alive, slow
  q += 0.06 * sin(t * 0.35 + q.x + q.y);
  q += listen * 0.18 * vec2(fbm(q + 2.0), fbm(q - 1.3));

  float terrain = fbm(q * 1.7 + vec2(t * 0.08, -t * 0.05));
  float terrainB = fbm(q * 2.4 + vec2(-t * 0.06, t * 0.09) + 2.7);

  // Contours — annotated map of what can be claimed
  float thin = isoline(terrain, 7.0, 0.035);
  float thick = isoline(terrain, 3.5, 0.055);
  float grainContours = isoline(terrainB, 11.0, 0.025) * 0.55;
  float contours = thin * 0.55 + thick * 0.85 + grainContours;
  contours *= 0.45 + 0.55 * smoothstep(0.15, 0.8, terrainB);
  contours *= 0.75 + listen * 0.55;

  // Soft presence of two poles (human ↔ machine) — glow only, no expanding rings
  vec2 human = vec2(-0.52, 0.18);
  vec2 machine = vec2(0.55, -0.12);
  float dH = length(p - human);
  float dM = length(p - machine);

  // —— Refusal fog: zones where certainty dissolves ——
  float refuse = fbm(p * 1.2 + vec2(t * 0.05, -t * 0.04) + 8.0);
  float undecided = smoothstep(0.48, 0.72, refuse) * smoothstep(0.88, 0.62, refuse + terrain * 0.2);
  undecided = pow(undecided, 1.35);

  // Sparse grain — field recording dust
  float dust = (hash(floor(uv * uResolution.xy * 0.35) + floor(t * 2.0)) - 0.5) * 0.035;

  // —— Palette (site) ——
  vec3 paper = vec3(0.949, 0.941, 0.925);
  vec3 paperDeep = vec3(0.886, 0.878, 0.859);
  vec3 mist = vec3(0.76, 0.79, 0.81);
  vec3 accent = vec3(0.039, 0.361, 0.361);
  vec3 accentSoft = vec3(0.16, 0.48, 0.46);
  vec3 ink = vec3(0.102, 0.110, 0.122);

  // Base atmosphere — paper field with depth
  float height = terrain * 0.55 + terrainB * 0.35;
  vec3 col = mix(paperDeep, paper, clamp(0.28 + height * 0.9, 0.0, 1.0));
  col = mix(col, mist, 0.28 * smoothstep(0.25, 0.85, terrainB));

  // Daylight from upper-left (existing site light language)
  float daylight = exp(-length((uv - vec2(0.14, 0.08)) * vec2(1.8, 2.3)) * 2.1);
  col = mix(col, paper, daylight * 0.45);

  // Soft dual blooms — infrastructure / relation without motion rings
  float humanGlow = exp(-dH * dH * 1.6) * 0.22;
  float machineGlow = exp(-dM * dM * 1.8) * 0.32;
  col = mix(col, mist, humanGlow);
  col = mix(col, mix(mist, accentSoft, 0.45), machineGlow);

  // Undecided fog first — refusal eats what can be claimed
  col = mix(col, mix(paper, mist, 0.35), undecided * 0.55);

  // A few traces, each on its own breath of a few seconds.
  // Some sit in the mist, some on the lines.
  float backMark = 0.0;
  float foreMark = 0.0;
  vec2 markAspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
  float span = 4.6;
  for (int i = 0; i < 7; i++) {
    float n = float(i);
    float shifted = uTime / span + n / 7.0;
    float phase = fract(shifted);
    float generation = floor(shifted);
    float life = smoothstep(0.0, 0.28, phase) * (1.0 - smoothstep(0.68, 1.0, phase));
    life *= 1.0 - uReduce;
    vec2 pos = vec2(
      hash(vec2(generation + n * 1.7, 2.3)),
      hash(vec2(n + 5.1, generation + 1.7))
    );
    pos = pos * 0.86 + 0.07;
    float inNote = step(uNote.x, pos.x) * step(pos.x, uNote.z)
      * step(uNote.y, pos.y) * step(pos.y, uNote.w);
    float depth = hash(vec2(generation + 8.0, n + 3.0));
    float back = step(depth, 0.5);
    float radius = mix(0.012, 0.028, back);
    radius *= 0.75 + 0.4 * hash(vec2(n + 2.0, generation));
    float falloff = mix(0.32, 1.05, back);
    vec2 delta = (uv - pos) * markAspect;
    float blob = exp(-dot(delta, delta) / max(radius * radius * falloff, 0.0001));
    blob *= (1.0 - inNote) * life;
    backMark = max(backMark, blob * back);
    foreMark = max(foreMark, blob * (1.0 - back));
  }
  col = mix(col, mix(accentSoft, ink, 0.55), backMark * 0.38);

  float claimLines = contours * (1.0 - undecided * 0.9);

  // Draw topography in ink/accent
  col = mix(col, mix(ink, accent, 0.55), claimLines * 0.82);
  col = mix(col, accent, thick * (1.0 - undecided) * 0.22);
  col = mix(col, ink, foreMark * 0.9);

  // Listening probe clarifies local contours
  col = mix(col, mix(col, accent, 0.25), listen * 0.35);

  col += dust;

  // Soft edge — plate, not a text shelf
  float vignette = smoothstep(1.35, 0.25, length(p * vec2(0.75, 1.15)));
  col *= 0.88 + 0.12 * vignette;

  col = (col - 0.5) * 1.08 + 0.5;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

export type HeroFieldHandle = {
  destroy: () => void;
  pulse: () => void;
};

export function initHeroField(canvas: HTMLCanvasElement): HeroFieldHandle | null {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let renderer: Renderer;
  try {
    renderer = new Renderer({
      canvas,
      width: canvas.clientWidth || 1,
      height: canvas.clientHeight || 1,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      alpha: false,
      depth: false,
      antialias: false,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }

  const gl = renderer.gl;
  if (!gl) return null;

  gl.clearColor(0.949, 0.941, 0.925, 1);

  const geometry = new Triangle(gl);
  const pointer = new Vec2(0.5, 0.5);
  const targetPointer = new Vec2(0.5, 0.5);
  let pointerStrength = 0;
  let targetStrength = 0;

  const program = new Program(gl, {
    vertex,
    fragment,
    cullFace: false,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uResolution: {
        value: new Vec2(
          Math.max(canvas.clientWidth, 1) * renderer.dpr,
          Math.max(canvas.clientHeight, 1) * renderer.dpr,
        ),
      },
      uPointer: { value: pointer },
      uPointerStrength: { value: 0 },
      uReduce: { value: reduceMotion ? 1 : 0 },
      uNote: { value: new Vec4(-1, -1, -1, -1) },
    },
  });

  const mesh = new Mesh(gl, { geometry, program });

  const note = canvas.closest(".hero")?.querySelector<HTMLElement>(".hero__note");

  const measureNote = () => {
    const noteBox = program.uniforms.uNote.value as Vec4;
    if (!note) {
      noteBox.set(-1, -1, -1, -1);
      return;
    }
    const canvasRect = canvas.getBoundingClientRect();
    const noteRect = note.getBoundingClientRect();
    const pad = 10;
    const width = Math.max(canvasRect.width, 1);
    const height = Math.max(canvasRect.height, 1);
    // Shader uv.y is 0 at the bottom of the plate.
    const top = 1 - (noteRect.top - pad - canvasRect.top) / height;
    const bottom = 1 - (noteRect.bottom + pad - canvasRect.top) / height;
    noteBox.set(
      (noteRect.left - pad - canvasRect.left) / width,
      bottom,
      (noteRect.right + pad - canvasRect.left) / width,
      top,
    );
  };

  const resize = () => {
    const w = Math.max(canvas.clientWidth, 1);
    const h = Math.max(canvas.clientHeight, 1);
    renderer.setSize(w, h);
    program.uniforms.uResolution.value.set(w * renderer.dpr, h * renderer.dpr);
    measureNote();
  };

  const onPointerMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    targetPointer.set(
      (event.clientX - rect.left) / Math.max(rect.width, 1),
      1 - (event.clientY - rect.top) / Math.max(rect.height, 1),
    );
    targetStrength = 1;
  };

  const onPointerLeave = () => {
    targetStrength = 0;
  };

  const section = canvas.closest(".hero");
  section?.addEventListener("pointermove", onPointerMove);
  section?.addEventListener("pointerleave", onPointerLeave);

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement || canvas);
  resize();

  const pulse = () => {
    measureNote();
  };

  let raf = 0;
  let start = performance.now();
  let last = start;
  let running = true;

  const frame = (now: number) => {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    pointer.x += (targetPointer.x - pointer.x) * Math.min(1, dt * 4);
    pointer.y += (targetPointer.y - pointer.y) * Math.min(1, dt * 4);
    pointerStrength += (targetStrength - pointerStrength) * Math.min(1, dt * 3);

    const elapsed = (now - start) / 1000;
    program.uniforms.uTime.value = reduceMotion ? elapsed * 0.08 : elapsed;
    program.uniforms.uPointerStrength.value = reduceMotion ? 0 : pointerStrength;

    renderer.render({ scene: mesh });
    raf = requestAnimationFrame(frame);
  };

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!running) {
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(frame);
        }
      } else {
        running = false;
        cancelAnimationFrame(raf);
      }
    },
    { threshold: 0.05 },
  );
  io.observe(canvas);

  raf = requestAnimationFrame(frame);

  return {
    pulse,
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      section?.removeEventListener("pointermove", onPointerMove);
      section?.removeEventListener("pointerleave", onPointerLeave);
      geometry.remove();
      program.remove();
    },
  };
}
