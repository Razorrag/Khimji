"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SplitText } from '../ui/SplitText';

interface RouteData {
  city: string;
  x: number;
  y: number;
  time: string;
  type: string;
}

const DESTINATIONS: RouteData[] = [
  { city: "Delhi NCR", x: 400, y: 220, time: "24 Hours", type: "Express Corridor" },
  { city: "Mumbai", x: 290, y: 510, time: "36 Hours", type: "Industrial Hub" },
  { city: "Ahmedabad", x: 245, y: 390, time: "24 Hours", type: "Manufacturing Zone" },
  { city: "Chennai", x: 450, y: 720, time: "48-72 Hours", type: "Automotive Hub" },
  { city: "Bengaluru", x: 385, y: 690, time: "48-72 Hours", type: "Tech Corridor" },
  { city: "Kolkata", x: 690, y: 450, time: "48-72 Hours", type: "Eastern Hub" },
  { city: "Guwahati", x: 810, y: 360, time: "72-96 Hours", type: "Northeast Link" },
  { city: "Hyderabad", x: 440, y: 560, time: "48 Hours", type: "Distribution Center" }
];

const SOURCE = { city: "Jaipur (Plant)", x: 350, y: 310 };

export function IndiaMap() {
  const [activeRoute, setActiveRoute] = useState<RouteData | null>(null);

  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-glass-border">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-amber/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        
        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5">
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "60px" }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="h-[1px] bg-amber mb-6"
            />
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Logistics Network</h3>
            <h2 className="font-bebas text-[clamp(44px,5vw,75px)] leading-[0.85] text-cream uppercase mb-6">
              <SplitText text="NATIONWIDE" /> <br />
              <span className="text-steel"><SplitText text="DISTRIBUTION" delayOffset={0.2} /></span>
            </h2>
            
            <p className="font-sans text-steel/70 text-sm leading-relaxed font-light mb-8 max-w-[450px]">
              Headquartered in Jaipur, Rajasthan, Khemji Wire maintains seamless logistics corridors. We utilize express highways and trusted freight partners to deliver certified wire coils to major industrial nodes and ports across the subcontinent.
            </p>

            {/* Interactive Logistics Info Card */}
            <div className="glass-panel p-6 rounded-2xl border border-glass-border bg-charcoal/20 min-h-[160px] flex flex-col justify-between">
              {activeRoute ? (
                <motion.div
                  key={activeRoute.city}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-mono text-[10px] text-amber uppercase tracking-wider mb-2">{activeRoute.type}</div>
                  <h4 className="font-bebas text-2xl text-cream tracking-wide mb-1">Jaipur to {activeRoute.city}</h4>
                  <p className="font-sans text-[12px] text-steel/80 leading-relaxed font-light mb-3">
                    Direct transit routing via national highways. GPS tracked dispatch.
                  </p>
                  <div className="flex items-center gap-6 mt-4 pt-3 border-t border-glass-border/40">
                    <div>
                      <span className="block font-mono text-[9px] text-steel/50 uppercase">Est. Transit Time</span>
                      <span className="font-bebas text-lg text-cream">{activeRoute.time}</span>
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-steel/50 uppercase">Tracking</span>
                      <span className="font-bebas text-lg text-amber">Active GPS</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col justify-center items-center text-center h-full py-4">
                  <div className="text-amber/40 mb-3">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <p className="font-sans text-xs text-steel/60 font-light max-w-[280px]">
                    Hover over or click on any destination city node on the map to explore transit durations and logistics corridors.
                  </p>
                </div>
              )}
            </div>

            {/* General Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border-l border-amber/30 pl-4 py-2">
                <span className="block font-bebas text-xl text-cream">24 - 48 HRS</span>
                <span className="block font-mono text-[9px] text-steel/50 uppercase">North & West India</span>
              </div>
              <div className="border-l border-amber/30 pl-4 py-2">
                <span className="block font-bebas text-xl text-cream">72 HRS MAX</span>
                <span className="block font-mono text-[9px] text-steel/50 uppercase">South & East Ports</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 flex justify-center items-center relative select-none">
            <div className="w-full max-w-[650px] aspect-[4/5] relative">
              <svg 
                viewBox="100 50 820 800" 
                className="w-full h-full opacity-90 filter drop-shadow-[0_0_15px_rgba(249,115,22,0.05)]"
              >
                {/* Simplified India Map Border Outlines */}
                <path
                  d="M 450,80 L 480,120 L 470,160 L 485,180 L 465,220 L 530,240 L 580,260 L 640,285 L 685,310 L 715,360 L 730,360 L 740,320 L 780,310 L 820,320 L 860,300 L 880,340 L 840,380 L 850,420 L 810,430 L 775,410 L 750,440 L 710,450 L 700,480 L 650,490 L 610,530 L 540,610 L 500,660 L 470,720 L 430,770 L 400,810 L 390,810 L 385,780 L 350,710 L 330,640 L 310,570 L 290,510 L 220,490 L 180,480 L 170,440 L 195,430 L 210,390 L 245,370 L 285,380 L 320,345 L 340,320 L 380,280 L 375,220 L 400,180 L 395,145 L 420,110 Z"
                  fill="rgba(20, 20, 20, 0.4)"
                  stroke="rgba(249, 115, 22, 0.15)"
                  strokeWidth="2"
                  className="transition-colors duration-500"
                />

                {/* Shipping Route Lines (Animated) */}
                {DESTINATIONS.map((dest) => {
                  const isHovered = activeRoute?.city === dest.city;
                  return (
                    <g key={`route-${dest.city}`}>
                      {/* Underlay glowing thick path */}
                      <path
                        d={`M ${SOURCE.x} ${SOURCE.y} Q ${(SOURCE.x + dest.x)/2 + 20} ${(SOURCE.y + dest.y)/2 - 30} ${dest.x} ${dest.y}`}
                        fill="none"
                        stroke={isHovered ? "rgba(249, 115, 22, 0.4)" : "rgba(249, 115, 22, 0.08)"}
                        strokeWidth={isHovered ? 3 : 1.5}
                        className="transition-all duration-300"
                      />
                      {/* Pulse dash array path */}
                      <path
                        d={`M ${SOURCE.x} ${SOURCE.y} Q ${(SOURCE.x + dest.x)/2 + 20} ${(SOURCE.y + dest.y)/2 - 30} ${dest.x} ${dest.y}`}
                        fill="none"
                        stroke="rgb(249, 115, 22)"
                        strokeWidth="1.5"
                        strokeDasharray={isHovered ? "8 6" : "6 10"}
                        className="animate-route-pulse"
                        style={{
                          animation: 'dash 20s linear infinite',
                        }}
                      />
                    </g>
                  );
                })}

                {/* Source Node (Jaipur Plant) */}
                <g transform={`translate(${SOURCE.x}, ${SOURCE.y})`} className="cursor-pointer">
                  {/* Outer pulsating circles */}
                  <circle r="14" fill="rgba(249, 115, 22, 0.15)" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle r="8" fill="rgba(249, 115, 22, 0.3)" />
                  <circle r="4" fill="rgb(249, 115, 22)" />
                  {/* Label for Jaipur */}
                  <text 
                    y="-14" 
                    textAnchor="middle" 
                    fill="#fff" 
                    fontFamily="monospace" 
                    fontSize="9" 
                    fontWeight="bold"
                    letterSpacing="1"
                    className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pointer-events-none"
                  >
                    JAIPUR PLANT
                  </text>
                </g>

                {/* Destination Nodes */}
                {DESTINATIONS.map((dest) => {
                  const isHovered = activeRoute?.city === dest.city;
                  return (
                    <g 
                      key={`node-${dest.city}`}
                      transform={`translate(${dest.x}, ${dest.y})`}
                      className="cursor-pointer group/node"
                      onMouseEnter={() => setActiveRoute(dest)}
                      onMouseLeave={() => setActiveRoute(null)}
                      onClick={() => setActiveRoute(activeRoute?.city === dest.city ? null : dest)}
                      onTouchStart={() => setActiveRoute(activeRoute?.city === dest.city ? null : dest)}
                    >
                      {/* Hover Hotspot area */}
                      <circle r="25" fill="transparent" />

                      {/* Visual Indicator dot */}
                      <circle 
                        r={isHovered ? 8 : 5} 
                        fill={isHovered ? "rgba(249, 115, 22, 0.2)" : "rgba(255, 255, 255, 0.1)"} 
                        stroke={isHovered ? "rgb(249, 115, 22)" : "rgba(255, 255, 255, 0.4)"}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      <circle 
                        r="2.5" 
                        fill={isHovered ? "rgb(249, 115, 22)" : "#94a3b8"} 
                        className="transition-colors duration-300"
                      />
                      
                      {/* Tooltip Label */}
                      <text 
                        y="18" 
                        textAnchor="middle" 
                        fill={isHovered ? "#F97316" : "#94a3b8"} 
                        fontFamily="monospace" 
                        fontSize="9"
                        className="transition-colors duration-300 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] opacity-70 group-hover/node:opacity-100"
                      >
                        {dest.city}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Extra CSS keyframe block for animation fallback/compatibility */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes dash {
                  to {
                    stroke-dashoffset: -1000;
                  }
                }
                .animate-route-pulse {
                  animation: dash 35s linear infinite;
                }
              `}} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
