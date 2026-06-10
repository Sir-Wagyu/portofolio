/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         fontFamily: {
            sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
            jakarta: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
         },
         colors: {
            primary: {
               50: "#eff6ff",
               100: "#dbeafe",
               200: "#bfdbfe",
               300: "#93c5fd",
               400: "#60a5fa",
               500: "#3b82f6",
               600: "#2563eb",
               700: "#1d4ed8",
               800: "#1e40af",
               900: "#1e3a8a",
            },
            accent: {
               50: "#fffbeb",
               100: "#fef3c7",
               200: "#fde68a",
               300: "#fcd34d",
               400: "#fbbf24",
               500: "#f59e0b",
               600: "#d97706",
               700: "#b45309",
               800: "#92400e",
               900: "#78350f",
            },
         },
         animation: {
            fadeIn: "fadeIn 0.6s ease-in-out",
            slideUp: "slideUp 0.6s ease-out",
            slideDown: "slideDown 0.6s ease-out",
            slideLeft: "slideLeft 0.6s ease-out",
            slideRight: "slideRight 0.6s ease-out",
            "bounce-slow": "bounce 2s infinite",
            "pulse-slow": "pulse 3s infinite",
            "spin-slow": "spin 3s linear infinite",
         },
         keyframes: {
            fadeIn: {
               "0%": { opacity: "0" },
               "100%": { opacity: "1" },
            },
            slideUp: {
               "0%": { transform: "translateY(50px)", opacity: "0" },
               "100%": { transform: "translateY(0)", opacity: "1" },
            },
            slideDown: {
               "0%": { transform: "translateY(-50px)", opacity: "0" },
               "100%": { transform: "translateY(0)", opacity: "1" },
            },
            slideLeft: {
               "0%": { transform: "translateX(50px)", opacity: "0" },
               "100%": { transform: "translateX(0)", opacity: "1" },
            },
            slideRight: {
               "0%": { transform: "translateX(-50px)", opacity: "0" },
               "100%": { transform: "translateX(0)", opacity: "1" },
            },
         },
         perspective: {
            1000: "1000px",
         },
      },
   },
   plugins: [
      function ({ addUtilities }) {
         const newUtilities = {
            ".perspective-1000": {
               perspective: "1000px",
            },
            ".transform-style-preserve-3d": {
               transformStyle: "preserve-3d",
            },
            ".backface-hidden": {
               backfaceVisibility: "hidden",
            },
            ".rotate-y-180": {
               transform: "rotateY(180deg)",
            },
         };
         addUtilities(newUtilities);
      },
   ],
};
