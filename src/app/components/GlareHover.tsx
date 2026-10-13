import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import "./GlareHover.css";

type GlareVariant = "streak" | "twin" | "sheen";
type GlareMode = "hover" | "follow" | "click" | "loop";

type GlareHoverProps = {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  softness?: number;
  variant?: GlareVariant;
  blendMode?: CSSProperties["mixBlendMode"];
  rimGlint?: boolean;
  mode?: GlareMode;
  transitionDuration?: number;
  interval?: number;
  playOnce?: boolean;
  intro?: boolean;
  className?: string;
  style?: CSSProperties;
};

const smootherstep = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const bump = (t: number, center: number, half: number) => {
  const distance = Math.abs(t - center);
  return distance >= half ? 0 : smootherstep(1 - distance / half);
};

const PROFILES: Record<GlareVariant, (t: number, softness: number) => number> = {
  streak: (t, softness) => bump(t, 0.5, 0.06 + 0.16 * softness) + 0.32 * bump(t, 0.5, 0.5),
  twin: (t, softness) => bump(t, 0.36, 0.08 + 0.18 * softness) + 0.85 * bump(t, 0.7, 0.03 + 0.06 * softness) + 0.26 * bump(t, 0.5, 0.5),
  sheen: (t, softness) => 0.55 * bump(t, 0.5, 0.25 + 0.25 * softness) + 0.3 * bump(t, 0.5, 0.5),
};

const gradient = (color: string, opacity: number, variant: GlareVariant, softness: number) => {
  const profile = PROFILES[variant];
  const stops = Array.from({ length: 33 }, (_, index) => {
    const t = index / 32;
    const alpha = Math.round(Math.min(1, profile(t, softness) * opacity) * 1000) / 10;
    return `color-mix(in srgb, ${color} ${alpha}%, transparent) ${(t * 100).toFixed(1)}%`;
  });
  return `linear-gradient(90deg, ${stops.join(", ")})`;
};

const ease = (t: number) => (1 - Math.cos(Math.PI * t)) / 2;

export function GlareHover({
  width = "auto",
  height = "auto",
  background = "transparent",
  borderRadius = "0px",
  borderColor = "transparent",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 30,
  softness = 0.6,
  variant = "streak",
  blendMode = "screen",
  rimGlint = true,
  mode = "hover",
  transitionDuration = 650,
  interval = 3,
  playOnce = false,
  intro = false,
  className = "",
  style = {},
}: GlareHoverProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLSpanElement>(null);
  const bandRef = useRef<HTMLSpanElement>(null);
  const rimRef = useRef<HTMLSpanElement>(null);
  const introRef = useRef(false);
  const settingsRef = useRef({ glareAngle, glareSize, transitionDuration, interval, playOnce, intro });
  settingsRef.current = { glareAngle, glareSize, transitionDuration, interval, playOnce, intro };

  useEffect(() => {
    const root = rootRef.current;
    const glare = glareRef.current;
    if (!root || !glare) return;
    const hoverTarget = root.closest(".project-card") ?? root;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const geometry = { band: 0, reach: 0, ux: 0, uy: -1, angle: 0 };
    const state: {
      pos: number;
      velocity: number;
      target: number;
      presence: number;
      presenceTarget: number;
      sweep: null | { from: number; to: number; start: number; duration: number };
      visible: boolean;
    } = { pos: 0, velocity: 0, target: 0, presence: 0, presenceTarget: 0, sweep: null, visible: true };
    let animationFrame = 0;
    let lastFrame = 0;
    let timer = 0;

    const bands = () => [bandRef.current, rimRef.current].filter((element): element is HTMLSpanElement => Boolean(element));
    const write = () => {
      const transform = `translate(-50%, -50%) rotate(${geometry.angle - 90}deg) translateX(${state.pos.toFixed(2)}px)`;
      bands().forEach((band) => { band.style.transform = transform; });
      glare.style.opacity = state.presence.toFixed(3);
    };
    const measure = () => {
      const angle = settingsRef.current.glareAngle;
      const size = settingsRef.current.glareSize;
      const width = root.clientWidth;
      const height = root.clientHeight;
      const radians = (angle * Math.PI) / 180;
      const ux = Math.sin(radians);
      const uy = -Math.cos(radians);
      const diagonal = Math.hypot(width, height);
      const band = Math.max(8, (diagonal * size) / 100);
      const reach = (Math.abs(width * ux) + Math.abs(height * uy)) / 2 + band / 2 + 2;
      const resting = !state.sweep && mode !== "follow";
      Object.assign(geometry, { band, reach, ux, uy, angle });
      bands().forEach((element) => {
        element.style.width = `${band}px`;
        element.style.height = `${diagonal + band}px`;
      });
      if (resting) state.pos = state.pos > 0 ? reach : -reach;
      write();
    };
    const frame = (now: number) => {
      const delta = Math.min(0.05, (now - lastFrame) / 1000 || 0);
      lastFrame = now;
      let moving = false;
      if (state.sweep) {
        const sweepState = state.sweep;
        const progress = Math.min(1, (now - sweepState.start) / sweepState.duration);
        state.pos = sweepState.from + (sweepState.to - sweepState.from) * ease(progress);
        if (progress < 1) moving = true;
        else state.sweep = null;
      } else if (mode === "follow") {
        const steps = Math.max(1, Math.ceil(delta / (1 / 120)));
        const step = delta / steps;
        for (let index = 0; index < steps; index++) {
          state.velocity += (170 * (state.target - state.pos) - 24 * state.velocity) * step;
          state.pos += state.velocity * step;
        }
        const timeConstant = state.presenceTarget > state.presence ? 0.18 : 0.4;
        state.presence += (state.presenceTarget - state.presence) * (1 - Math.exp(-delta / timeConstant));
        moving = Math.abs(state.target - state.pos) > 0.05 || Math.abs(state.velocity) > 0.05 || Math.abs(state.presenceTarget - state.presence) > 0.002;
        if (!moving) state.presence = state.presenceTarget;
      }
      write();
      animationFrame = moving ? requestAnimationFrame(frame) : 0;
    };
    const wake = () => {
      if (animationFrame) return;
      lastFrame = performance.now();
      animationFrame = requestAnimationFrame(frame);
    };
    const sweep = (sign: number) => {
      if (reduced || !geometry.reach) return;
      const end = sign * geometry.reach;
      const from = state.sweep || Math.abs(state.pos) < geometry.reach ? state.pos : -end;
      if (from === end) return;
      const share = Math.abs(end - from) / (2 * geometry.reach);
      state.sweep = {
        from,
        to: end,
        start: performance.now(),
        duration: Math.max(120, settingsRef.current.transitionDuration * share),
      };
      wake();
    };
    const along = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      return dx * geometry.ux + dy * geometry.uy;
    };
    const follow = (event: PointerEvent) => {
      state.target = Math.max(-geometry.reach, Math.min(geometry.reach, along(event)));
      wake();
    };
    const onEnter = (event: PointerEvent) => {
      if (mode === "hover" && event.pointerType !== "touch" && !reduced) {
        state.presence = 1;
        state.pos = -geometry.reach;
        state.sweep = null;
        sweep(1);
      }
      if (mode === "follow") {
        if (state.presence < 0.02) {
          state.pos = Math.max(-geometry.reach, Math.min(geometry.reach, along(event)));
          state.velocity = 0;
        }
        state.presenceTarget = reduced ? 0 : 1;
        follow(event);
      }
    };
    const onMove = (event: PointerEvent) => { if (mode === "follow") follow(event); };
    const onLeave = (event: PointerEvent) => {
      if (mode === "hover") {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        state.sweep = null;
        state.presence = 0;
        state.pos = -geometry.reach;
        write();
      }
      if (mode === "follow") {
        state.presenceTarget = 0;
        wake();
      }
    };
    const onDown = (event: PointerEvent) => { if (mode === "click") sweep(along(event) > 0 ? -1 : 1); };
    const onFocus = (event: FocusEvent) => {
      if (mode !== "follow" && mode !== "hover" && event.target instanceof Element && event.target.matches(":focus-visible")) sweep(1);
    };
    const schedule = () => {
      window.clearTimeout(timer);
      if (mode !== "loop" || reduced) return;
      timer = window.setTimeout(() => {
        if (state.visible && !document.hidden) sweep(1);
        schedule();
      }, Math.max(0.5, settingsRef.current.interval) * 1000);
    };

    hoverTarget.addEventListener("pointerenter", onEnter as EventListener);
    root.addEventListener("pointermove", onMove);
    hoverTarget.addEventListener("pointerleave", onLeave as EventListener);
    root.addEventListener("pointerdown", onDown);
    root.addEventListener("focusin", onFocus);
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(root);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
      if (mode !== "hover" && entry.isIntersecting && settingsRef.current.intro && !introRef.current) {
        introRef.current = true;
        sweep(1);
      }
    }, { threshold: 0.4 });
    visibilityObserver.observe(root);
    state.presence = mode === "follow" || mode === "hover" ? 0 : 1;
    state.presenceTarget = state.presence;
    state.pos = -10000;
    measure();
    schedule();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      hoverTarget.removeEventListener("pointerenter", onEnter as EventListener);
      root.removeEventListener("pointermove", onMove);
      hoverTarget.removeEventListener("pointerleave", onLeave as EventListener);
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("focusin", onFocus);
    };
  }, [mode]);

  const glare = gradient(glareColor, glareOpacity, variant, softness);
  const rim = gradient(glareColor, Math.min(1, glareOpacity * 1.8), variant, softness);
  const customProperties = {
    "--gh-width": width,
    "--gh-height": height,
    "--gh-bg": background,
    "--gh-br": borderRadius,
    "--gh-border": borderColor,
    "--gh-glare": glare,
    "--gh-rim": rim,
    "--gh-blend": blendMode,
    ...style,
  } as CSSProperties;

  return (
    <div ref={rootRef} className={`glare-hover ${className}`.trim()} style={customProperties}>
      {children}
      <span ref={glareRef} className="glare-hover__glare" aria-hidden="true">
        <span ref={bandRef} className="glare-hover__band" />
        {rimGlint && (
          <span className="glare-hover__rim">
            <span ref={rimRef} className="glare-hover__band glare-hover__band--rim" />
          </span>
        )}
      </span>
    </div>
  );
}
