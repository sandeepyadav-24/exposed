"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ValuePoints() {
  // Update the floating elements configuration with more visible colors and proper z-index
  const floatingElements = [
    // Large gradient orbs
    {
      size: "w-64 h-64",
      color:
        "bg-gradient-to-br from-blue-400/30 via-indigo-500/25 to-purple-500/20",
      animation: "animate-float-slow",
      shape: "rounded-[60%_40%_50%_50%/40%_50%_60%_50%]",
      opacity: "opacity-80",
      blur: "blur-2xl",
      zIndex: -1,
    },
    // Animated rings
    {
      size: "w-32 h-32",
      color: "bg-transparent border-[3px] border-dashed border-blue-400/40",
      animation: "animate-spin-slow",
      shape: "rounded-full",
      opacity: "opacity-80",
      zIndex: -1,
    },
    // Glowing dots
    ...Array(8)
      .fill(null)
      .map(() => ({
        size: "w-3 h-3",
        color: "bg-blue-500/50",
        animation: "animate-pulse-glow",
        shape: "rounded-full",
        opacity: "opacity-80",
        blur: "blur-sm",
        zIndex: -1,
      })),
    // Floating code symbols
    {
      size: "w-12 h-12",
      content: "{ }",
      color: "text-blue-500/40",
      animation: "animate-float-alt",
      className: "font-mono text-xl font-bold",
      opacity: "opacity-80",
      zIndex: -1,
    },
    {
      size: "w-12 h-12",
      content: "</>",
      color: "text-purple-500/40",
      animation: "animate-float",
      className: "font-mono text-xl font-bold",
      opacity: "opacity-80",
      zIndex: -1,
    },
    // Decorative lines
    {
      size: "w-48 h-[2px]",
      color:
        "bg-gradient-to-r from-blue-400/50 via-indigo-500/40 to-transparent",
      animation: "animate-float-slow",
      rotate: "rotate-[30deg]",
      opacity: "opacity-80",
      zIndex: -1,
    },
    // Additional decorative elements
    {
      size: "w-20 h-20",
      color:
        "bg-gradient-to-tr from-purple-400/30 via-blue-500/25 to-indigo-500/20",
      animation: "animate-shape-morph",
      shape: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
      opacity: "opacity-80",
      blur: "blur-md",
      zIndex: -1,
    },
  ];

  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const generateElements = () => {
      return floatingElements.map((base, i) => ({
        ...base,
        id: i,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 5}s`,
        scale: Math.random() * 0.3 + 0.7,
      }));
    };

    setElements(generateElements());

    const interval = setInterval(() => {
      setElements(generateElements());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Floating Elements Container */}
      <div className="absolute z-10 inset-0 pointer-events-none overflow-hidden">
        {elements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${element.animation}`}
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              transform: `scale(${element.scale})`,
              zIndex: element.zIndex || -1,
            }}
          >
            {element.content ? (
              // Text content elements
              <div
                className={`
                  ${element.size}
                  ${element.color}
                  ${element.className || ""}
                  ${element.opacity || "opacity-80"}
                  flex items-center justify-center
                  transition-all duration-300
                  backdrop-blur-sm
                `}
              >
                {element.content}
              </div>
            ) : (
              // Shape elements
              <div
                className={`
                  ${element.size}
                  ${element.color}
                  ${element.rotate || ""}
                  ${element.shape || ""}
                  ${element.opacity || "opacity-80"}
                  ${element.blur || ""}
                  transition-all duration-300
                  backdrop-blur-sm
                `}
              />
            )}
          </div>
        ))}
      </div>

      {/* Enhanced gradient backgrounds */}
      <div className="absolute top-0 -left-4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-100/40 via-blue-100/30 to-transparent rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-50/20 via-indigo-50/20 to-purple-50/20 rounded-full blur-[150px] -z-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 animate-pulse" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-100" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-200" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-300" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Last 3 Placements:
            <br />
            Shamefully <span className="text-blue-600">Low Packages.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Recent placements reveal the college's failure—students offered
            salaries far below industry standards, barely enough to survive.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-red-50 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-red-600 font-bold">₹3.5L</span>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Vishu Rana</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>Motherson Technology</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Role: Graduate Engineer Trainee</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Bond: 2 Years</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-blue-900">
                  Internship Details
                </h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-blue-800">0 months</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Stipend:</span>
                  <span className="font-medium text-blue-800">₹0</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Annual Package</span>
                  <span className="text-lg font-bold text-red-600">
                    ₹3.5 LPA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-red-50 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-red-600 font-bold">₹5.5L</span>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Dhruv Kumar</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>Successive Technologies</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Role: Trainee Engineer</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Bond: 1.5 Years</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-blue-900">
                  Internship Details
                </h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-blue-800">6 months</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Stipend:</span>
                  <span className="font-medium text-blue-800">
                    ₹25,000/month
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Annual Package</span>
                  <span className="text-lg font-bold text-red-600">
                    ₹5.5 LPA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-red-50 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-red-600 font-bold">₹4.5L</span>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Chahat Ladani</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>Instant Systems</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Role: Mobile Developer</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Bond: 0 Years</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-blue-900">
                  Internship Details
                </h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-blue-800">6 months</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Stipend:</span>
                  <span className="font-medium text-blue-800">
                    ₹15,000/month
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Annual Package</span>
                  <span className="text-lg font-bold text-red-600">
                    ₹4.5 LPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
