import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import "./WebThreads.css";

type FanMode = "center" | "left" | "right";

type WebThreadsProps = {
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  threadCount?: number;
  frequency?: number;
  spread?: number;
  taper?: number;
  position?: number;
  fanMode?: FanMode;
  glow?: number;
  falloff?: number;
  thickness?: number;
  brightness?: number;
  opacity?: number;
  mirror?: boolean;
  shimmer?: boolean;
  grain?: boolean;
  grainIntensity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  className?: string;
};

const FAN_MODE: Record<FanMode, number> = { center: 0, left: 1, right: 2 };

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [
    Number.parseInt(result[1], 16) / 255,
    Number.parseInt(result[2], 16) / 255,
    Number.parseInt(result[3], 16) / 255,
  ];
};

const vertex = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uThreadCount;
uniform float uFrequency;
uniform float uSpread;
uniform float uTaper;
uniform float uPosition;
uniform float uFanMode;
uniform float uGlow;
uniform float uFalloff;
uniform float uThickness;
uniform float uBrightness;
uniform float uOpacity;
uniform float uMirror;
uniform float uShimmer;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform float uEnableMouse;
uniform float uMouseActive;
out vec4 fragColor;

#define TAU 6.28318530718
#define MAX_THREADS 10

float threadGlow(float x, float strength, float distance) {
  return distance / pow(max(x, 1e-4), strength);
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float n = max(uThreadCount, 1.0);
  float pinchX = uFanMode < 0.5 ? 0.5 : (uFanMode < 1.5 ? 0.0 : 1.0);
  if (uEnableMouse > 0.5) {
    pinchX = mix(pinchX, uMouse.x, clamp(uMouseStrength, 0.0, 1.0) * uMouseActive);
  }

  float spreadDx = uSpread * abs(uv.x - pinchX);
  float baseT = iTime * uSpeed;
  float tauOverN = TAU / n;
  float mirror = uMirror > 0.5 ? sign(pinchX - uv.x) : 1.0;
  bool doShimmer = uShimmer > 0.5;
  float shimmerT = iTime * 1.7;
  float invThickness = 1.0 / max(uThickness, 0.01);
  float xFreq = uv.x * uFrequency;
  float yOff = uv.y - uPosition;
  float colorScale = n > 1.0 ? 1.0 / (n - 1.0) : 0.0;
  vec3 color = vec3(0.0);
  float glowSum = 0.0;

  for (int idx = 0; idx < MAX_THREADS; idx++) {
    float i = float(idx);
    if (i >= n) break;
    float amplitude = spreadDx * (1.0 + i * uTaper);
    float shimmer = doShimmer ? sin(shimmerT + i * 1.3) * 0.35 : 0.0;
    float phase = (baseT + i * tauOverN) * mirror + shimmer;
    float sdf = abs(yOff + sin(xFreq + phase) * amplitude) * invThickness;
    float lineGlow = threadGlow(sdf, uFalloff, uGlow);
    color += lineGlow * mix(uColor1, uColor2, i * colorScale);
    glowSum += lineGlow;
  }

  color = mix(color, uColor3 * glowSum, smoothstep(0.5, 2.2, glowSum) * 0.5);
  float brightness = uBrightness;
  if (uEnableMouse > 0.5) {
    vec2 mouseDistance = uv - uMouse;
    brightness += clamp(uMouseStrength, 0.0, 1.0) * uMouseActive * exp(-dot(mouseDistance, mouseDistance) * 6.0) * 0.6;
  }
  color *= brightness;

  float alpha = clamp(glowSum, 0.0, 1.0) * uOpacity;
  vec3 outputColor = color * alpha;
  if (uGrain > 0.5) {
    float grainValue = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + iTime) * 43758.5453) - 0.5) * uGrainIntensity;
    outputColor = clamp(outputColor + grainValue, 0.0, 1.0);
    alpha = clamp(alpha + grainValue, 0.0, 1.0);
  }
  fragColor = vec4(outputColor, alpha);
}
`;

export function WebThreads({
  color1 = "#3fff00",
  color2 = "#10b4b9",
  color3 = "#ffffff",
  speed = 0.2,
  threadCount = 6,
  frequency = 5,
  spread = 0.18,
  taper = 1,
  position = 0.5,
  fanMode = "center",
  glow = 0.02,
  falloff = 0.6,
  thickness = 1.1,
  brightness = 0.6,
  opacity = 1,
  mirror = true,
  shimmer = false,
  grain = true,
  grainIntensity = 0.05,
  mouseInteraction = true,
  mouseStrength = 0.3,
  className = "",
}: WebThreadsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const allowPointer = mouseInteraction && !reduceMotion;
    const pointerTarget = container.closest(".hero-section") ?? container;
    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.25 : 2),
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.setAttribute("aria-hidden", "true");
    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uSpeed: { value: speed },
        uThreadCount: { value: Math.round(threadCount) },
        uFrequency: { value: frequency },
        uSpread: { value: spread },
        uTaper: { value: taper },
        uPosition: { value: position },
        uFanMode: { value: FAN_MODE[fanMode] },
        uGlow: { value: glow },
        uFalloff: { value: falloff },
        uThickness: { value: thickness },
        uBrightness: { value: brightness },
        uOpacity: { value: opacity },
        uMirror: { value: mirror ? 1 : 0 },
        uShimmer: { value: shimmer ? 1 : 0 },
        uGrain: { value: grain ? 1 : 0 },
        uGrainIntensity: { value: grainIntensity },
        uColor1: { value: new Float32Array(hexToRgb(color1)) },
        uColor2: { value: new Float32Array(hexToRgb(color2)) },
        uColor3: { value: new Float32Array(hexToRgb(color3)) },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseStrength: { value: mouseStrength },
        uEnableMouse: { value: allowPointer ? 1 : 0 },
        uMouseActive: { value: 0 },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });
    const render = () => renderer.render({ scene: mesh });
    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(Math.max(1, Math.floor(rect.width)), Math.max(1, Math.floor(rect.height)));
      program.uniforms.iResolution.value[0] = gl.drawingBufferWidth;
      program.uniforms.iResolution.value[1] = gl.drawingBufferHeight;
      render();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const currentMouse = [0.5, 0.5];
    const targetMouse = [0.5, 0.5];
    let currentActive = 0;
    let targetActive = 0;
    let frame = 0;
    let onScreen = true;
    let pageVisible = !document.hidden;
    const startedAt = performance.now();

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouse[0] = (event.clientX - rect.left) / rect.width;
      targetMouse[1] = 1 - (event.clientY - rect.top) / rect.height;
      targetActive = 1;
    };
    const onPointerLeave = () => { targetActive = 0; };
    const loop = (time: number) => {
      program.uniforms.iTime.value = (time - startedAt) * 0.001;
      currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
      currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
      currentActive += 0.05 * (targetActive - currentActive);
      program.uniforms.uMouse.value[0] = currentMouse[0];
      program.uniforms.uMouse.value[1] = currentMouse[1];
      program.uniforms.uMouseActive.value = currentActive;
      render();
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };
    const start = () => {
      if (!reduceMotion && onScreen && pageVisible && !frame) frame = requestAnimationFrame(loop);
    };

    if (allowPointer) {
      pointerTarget.addEventListener("pointerdown", onPointerMove as EventListener, { passive: true });
      pointerTarget.addEventListener("pointermove", onPointerMove as EventListener, { passive: true });
      pointerTarget.addEventListener("pointerup", onPointerLeave);
      pointerTarget.addEventListener("pointercancel", onPointerLeave);
      pointerTarget.addEventListener("pointerleave", onPointerLeave);
    }
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      onScreen ? start() : stop();
    });
    intersectionObserver.observe(container);
    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      pageVisible ? start() : stop();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      pointerTarget.removeEventListener("pointerdown", onPointerMove as EventListener);
      pointerTarget.removeEventListener("pointermove", onPointerMove as EventListener);
      pointerTarget.removeEventListener("pointerup", onPointerLeave);
      pointerTarget.removeEventListener("pointercancel", onPointerLeave);
      pointerTarget.removeEventListener("pointerleave", onPointerLeave);
      canvas.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    brightness, color1, color2, color3, falloff, fanMode, frequency, glow, grain,
    grainIntensity, mirror, mouseInteraction, mouseStrength, opacity, position,
    shimmer, speed, spread, taper, thickness, threadCount,
  ]);

  return <div ref={containerRef} className={`web-threads-container ${className}`.trim()} />;
}
