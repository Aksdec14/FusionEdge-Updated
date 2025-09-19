import React from "react";
import img1 from "../assets/Images/laptop-with-blank-black-screen-white-table.jpg";
import img2 from '../assets/Images/56394.jpg'
import img3 from '../assets/Images/people-office-analyzing-checking-finance-graphs.jpg'

// Utility: convert polar to CSS absolute positioning
function polarToCss(radius, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% - ${y}px)`,
  };
}

function Orbit({ items, radius }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((item, idx) => {
        const style = polarToCss(radius, item.angle);
        const labelRadius = radius + 28;
        const labelPos = polarToCss(labelRadius, item.angle);
        return (
          <React.Fragment key={`${item.label}-${idx}`}>
            <span
              className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-sm ring-2 ring-white"
              style={style}
            />
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] sm:text-[13px] font-medium text-slate-700"
              style={labelPos}
            >
              {item.label}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function Pill({ title, subtitle }) {
  return (
    <div className="inline-flex flex-col items-center gap-1">
      <div className="rounded-full bg-sky-200/50 px-4 sm:px-6 py-2 sm:py-3 text-sky-900 shadow-sm ring-1 ring-sky-400/40">
        <span className="text-sm sm:text-base font-semibold tracking-wide">
          {title}
        </span>
      </div>
      <div className="text-xs sm:text-sm text-slate-500 text-center">
        {subtitle}
      </div>
    </div>
  );
}

export default function IntegrationDiagram({
  title = "AssetCues Integrates with Your ERP",
  leftPill = "AssetCues tracks",
  leftSubtitle = "The Physical information of Assets",
  rightPill = "ERP maintains",
  rightSubtitle = "The Financial information of Assets",
  leftItems = [
    { label: "Asset User", angle: 230 },
    { label: "Asset Location", angle: 300 },
    { label: "Asset Existence", angle: 340 },
    { label: "Asset Condition", angle: 200 },
    { label: "Asset Status", angle: 160 },
  ],
  rightItems = [
    { label: "Asset Capitalization", angle: 200 },
    { label: "Asset Procurement", angle: 320 },
    { label: "Asset Budgeting", angle: 20 },
    { label: "Asset Accounting", angle: 120 },
    { label: "Asset Maintenance", angle: 160 },
  ],
  leftImage = "https://images.unsplash.com/photo-1527430253228-e93688616381?fit=crop&w=400&q=80",
  rightImages = [
    img1,
    img2,
    img3,
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?fit=crop&w=400&q=80",
  ],
}) {
  return (
    <section className="w-full px-4 py-8 md:py-16 bg-white">
      <h2 className="mb-8 md:mb-12 text-center text-lg sm:text-2xl md:text-3xl font-semibold text-slate-800 leading-snug md:leading-tight">
        {title}
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        {/* Left column */}
        <div className="relative mx-auto flex w-full max-w-xs sm:max-w-sm md:max-w-md flex-col items-center gap-6">
          <Pill title={leftPill} subtitle={leftSubtitle} />

          <div className="relative aspect-square w-full max-w-[380px] sm:max-w-[400px] md:max-w-[420px]">
            <div className="absolute inset-0 rounded-full border-2 border-sky-200" />
            <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl ring-1 ring-slate-200" />
            <Orbit items={leftItems} radius={130} />

            {/* Center Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 sm:h-36 w-36 sm:w-40 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                src={leftImage}
                alt="Left Center"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Middle arrows and caption */}
        <div className="hidden md:flex flex-col items-center gap-2 md:gap-3">
          <svg width={180} height={24} aria-hidden="true">
            <defs>
              <marker
                id="arrow"
                markerWidth={10}
                markerHeight={10}
                refX={6}
                refY={3}
                orient="auto-start-reverse"
              >
                <path d="M0,0 L0,6 L6,3 z" fill="#0891b2" />
              </marker>
            </defs>
            <line
              x1={0}
              y1={12}
              x2={170}
              y2={12}
              stroke="#0891b2"
              strokeWidth={3}
              markerEnd="url(#arrow)"
              markerStart="url(#arrow)"
            />
          </svg>
          <p className="max-w-[200px] text-center text-xs sm:text-sm text-slate-600">
            Synchronized to Generate
            <br />
            Comprehensive Asset register
          </p>
          
        </div>

        {/* Right column */}
        <div className="relative mx-auto flex w-full max-w-xs sm:max-w-sm md:max-w-md flex-col items-center gap-6">
          <Pill title={rightPill} subtitle={rightSubtitle} />

          <div className="relative aspect-square w-full max-w-[380px] sm:max-w-[400px] md:max-w-[420px]">
            <div className="absolute inset-0 rounded-full border-2 border-sky-200" />
            <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl ring-1 ring-slate-200" />
            <Orbit items={rightItems} radius={130} />

            {/* Center Images (multiple support) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                            h-32 sm:h-36 w-36 sm:w-40 rounded-lg overflow-hidden shadow-lg border border-gray-200 
                            grid grid-cols-2 gap-1">
              {rightImages.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`Right Center ${i}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
