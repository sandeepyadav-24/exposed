/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "float-alt": "floatAlt 10s ease-in-out infinite",
        "float-fast": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "shape-morph": "shapeMorph 12s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spin 12s linear infinite reverse",
        expand: "expand 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "glass-shimmer": "glassShimmer 3s ease-in-out infinite",
        "slide-in-top": "slideInTop 0.5s ease-out forwards",
        "shake-warning": "shakeWarning 2.5s ease-in-out infinite",
        "urgent-pulse": "urgentPulse 2s ease-in-out infinite",
        "progress-flash": "progressFlash 2s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        floatAlt: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg) scale(1)" },
          "50%": { transform: "translateY(-30px) rotate(-5deg) scale(1.1)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.3" },
          "50%": { transform: "scale(1.2)", opacity: "0.6" },
        },
        shapeMorph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
        expand: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glassShimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        shakeWarning: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        urgentPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(220, 38, 38, 0.4)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 0 10px rgba(220, 38, 38, 0)",
          },
        },
        progressFlash: {
          "0%": { opacity: "0.5" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
