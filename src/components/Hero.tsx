import Link from "next/link";

interface Point {
  x: number;
  y: number;
}

interface BeamLineProps {
  start: Point;
  end: Point;
  delay?: number;
}

const leftFeatures = [
  { id: 1, name: "AUDIT" },
  { id: 2, name: "EXTRACT" },
  { id: 3, name: "ANALYZE" },
  { id: 4, name: "VERIFY" },
];

const rightFeatures = [
  { id: 1, name: "ACTION" },
  { id: 2, name: "INSIGHTS" },
  { id: 3, name: "DOCS" },
  { id: 4, name: "REPORTS" },
];

{
  /**const BeamLine = ({ start, end, delay = 0 }: BeamLineProps) => (
  <>
    <path
      d={`M ${start.x} ${start.y} Q ${start.x - 100} ${end.y - 50}, ${end.x} ${
        end.y
      }`}
      className="connection-line opacity-30"
      stroke="url(#beamGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle className="particle-beam" r="2.5" fill="url(#beamGradient)">
      <animateMotion
        dur="1.5s"
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={`M ${start.x} ${start.y} Q ${start.x - 100} ${end.y - 50}, ${
          end.x
        } ${end.y}`}
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </animateMotion>
    </circle>
  </>
); */
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br  from-blue-50 to-white h-screen flex items-center">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Animated Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 1200 800"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Enhanced Glow Effect at Button */}
          <circle
            cx="5"
            cy="25"
            r="30"
            className="animate-pulse-glow"
            fill="url(#glowGradient)"
          />
          <circle
            cx="50"
            cy="350"
            r="30"
            className="animate-pulse-glow"
            fill="url(#glowGradient)"
          />
          <circle
            cx="450"
            cy="650"
            r="30"
            className="animate-pulse-glow"
            fill="url(#glowGradient)"
          />
          <circle
            cx="1250"
            cy="250"
            r="30"
            className="animate-pulse-glow"
            fill="url(#glowGradient)"
          />
        </svg>

        {/* Left Side Features */}
        <div className="absolute hidden md:block left-10 top-1/2 -translate-y-1/2 space-y-6">
          {leftFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`px-6 py-2 rounded-lg backdrop-blur-sm ${
                feature.name === "AUDIT" || feature.name === "VERIFY"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50/80 text-blue-600"
              } font-medium text-sm flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer animate-fade-in hover:shadow-lg hover:shadow-blue-100/50`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="w-1.5 h-1.5 bg-current rounded-full pulse" />
              {feature.name}
              <span className="w-1.5 h-1.5 bg-current rounded-full pulse" />
            </div>
          ))}
        </div>

        {/* Right Side Features */}
        <div className="absolute hidden md:block right-10 top-1/2 -translate-y-1/2 space-y-6">
          {rightFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`px-6 py-2 rounded-lg backdrop-blur-sm ${
                feature.name === "INSIGHTS" || feature.name === "DOCS"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50/80 text-blue-600"
              } font-medium text-sm flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer animate-fade-in hover:shadow-lg hover:shadow-blue-100/50`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="w-1.5 h-1.5 bg-current rounded-full pulse" />
              {feature.name}
              <span className="w-1.5 h-1.5 bg-current rounded-full pulse" />
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="mx-auto max-w-3xl text-center relative z-10">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-6">
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 animate-pulse" />
              <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-100" />
              <div className="w-2 h-2 bg-blue-500 animate-pulse delay-200" />
              <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-300" />
              <div className="w-2 h-2 bg-blue-500 animate-pulse delay-400" />
            </div>
          </div>

          <h1 className="text-[64px] leading-[1.1] font-bold tracking-tight text-[#1E293B]">
            No Companies, No Placements:
            <br />
            Our College’s <span className="text-blue-600">Broken Promise</span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Students are left without the opportunities they were promised,
            struggling to find jobs in a competitive market while the college
            administration remains inactive. It’s time to shine a light on this
            issue and demand the change we deserve.
          </p>

          {/* Get Started Button with Connected Lines */}
          <div className="mt-20 relative">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors group"
            >
              Get Started
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="rotate-45 group-hover:rotate-[135deg] transition-transform"
              >
                <path
                  d="M5 15L15 5M15 5H5M15 5V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
