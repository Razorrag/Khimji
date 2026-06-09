"use client";

import { useEffect, useRef } from 'react';

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext('webgl', { alpha: false, antialias: false, depth: false }) || 
                canvas.getContext('experimental-webgl', { alpha: false, antialias: false, depth: false })) as WebGLRenderingContext | null;
    
    if (!gl) {
      canvas.style.backgroundColor = '#060608';
      return;
    }

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.35; // Increased speed further for dynamic motion
        vec2 q = uv * 3.0; // tighter waves

        // Fluid motion warped by sine waves
        for (int i = 1; i < 6; i++) { // Increased complexity
          float fi = float(i);
          q.x += 0.25 / fi * cos(fi * 2.0 * q.y + t);
          q.y += 0.25 / fi * cos(fi * 2.0 * q.x + t);
        }

        // Create smooth fluid bands
        float m = sin(q.x + q.y) * 0.5 + 0.5;
        m = pow(m, 2.0); // sharper bands

        // Dark Charcoal/Obsidian base
        vec3 bg = vec3(0.03, 0.04, 0.05); 
        // Brushed silver
        vec3 silver = vec3(0.12, 0.15, 0.18); 
        // Sharp bright amber/silver highlights
        vec3 highlight = vec3(0.4, 0.2, 0.1); 
        // Thicker amber/orange glow
        vec3 amber = vec3(0.8, 0.35, 0.05);

        vec3 col = mix(bg, silver, m);
        // Add highlights on peaks
        col += highlight * smoothstep(0.7, 0.95, m); 
        // Add amber glow at the base of the highlights
        col += amber * smoothstep(0.4, 0.7, m) * (1.0 - smoothstep(0.7, 0.9, m)) * 0.4;

        // Heavy vignette focus
        float vig = length(p);
        col *= 1.0 - vig * 0.5;

        // Subtle film grain
        float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        col += (grain - 0.5) * 0.015;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

    let animationFrameId: number;
    let startTime = performance.now();

    function resize() {
      if (!canvas) return;
      // Cap scale for very high DPI displays to improve rendering performance
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); 
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }
    
    window.addEventListener('resize', resize);
    resize();

    function render(time: number) {
      gl!.uniform2f(resolutionUniformLocation, canvas!.width, canvas!.height);
      gl!.uniform1f(timeUniformLocation, (time - startTime) * 0.001);

      gl!.drawArrays(gl!.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      gl!.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full object-cover pointer-events-none -z-10" />;
}
