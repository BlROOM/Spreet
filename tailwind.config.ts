import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px", // Extra small devices (phones, 320px and up)
      xs: "480px", // Small devices (phones, 480px and up)
      sm: "640px", // Small devices (tablets, 640px and up)
      md: "768px", // Medium devices (tablets, 768px and up)
      lg: "1024px", // Large devices (desktops, 1024px and up)
      xl: "1280px", // Extra large devices (large desktops, 1280px and up)
      "2xl": "1600px", // 2xl devices (extra large screens, 1600px and up)
      "3xl": "1920px", // 3xl devices (large screens, 1920px and up)
    },
    height: {
      "screen-90": "90vh",
      "screen-85": "85vh",
      "screen-80": "80vh",
      "screen-70": "70vh",
      "screen-75": "75vh",
      "screen-65": "65vh",
      "screen-60": "60vh",
      "screen-50": "50vh",
      "screen-40": "40vh",
      "screen-30": "30vh",
      "screen-20": "20vh",
    },
    colors: {
      primary: {
        50: "#E6E9EF",
        100: "#C0C8D9",
        200: "#98A5BF",
        300: "#7282A5",
        400: "#546894",
        500: "#364F84",
        600: "#30487C",
        700: "#283E70",
        800: "#213564",
        900: "#18254C",
      },
      secondary: {
        50: "#E1F5FD",
        100: "#B2E6FA",
        200: "#80D5F7",
        300: "#4CC5F4",
        400: "#1CB8F3",
        500: "#00ACF2",
        600: "#009EE3",
        700: "#008BD0",
        800: "#0079BC",
        900: "#005A9B",
      },
      grayscale: {
        0: "#FFFFFF",
        100: "#F5F5F5",
        200: "#E9E9E9",
        300: "#C5C5C5",
        400: "#9F9F9F",
        500: "#7D7D7D",
        600: "#575757",
        700: "#454545",
        800: "#282828",
        900: "#121212",
      },
      redpoint: {
        50: "#FDE8EB",
        100: "#FCC5CE",
        200: "#F79BA7",
        300: "#F0727F",
        400: "#E94A58",
        500: "#D10536",
        600: "#BA0431",
        700: "#9A042A",
        800: "#7B0322",
        900: "#5D021A",
      },
      background: {
        100: "#F1F3F8",
      },
      warning: {
        100: "#FF294F",
      },
      success: {
        100: "#1FCE65",
      },
      icon: {
        closing: "#989898",
      },
      modal: {
        dim: "rgba(76, 76, 76, 0.53)",
      },
    },
    extend: {
      spacing: {
        wide: "0.25em",
        wider: "0.5em",
        widest: "1em",
      },
      boxShadow: {
        "custom-xxs":
          "0 0.5px 1px rgba(0, 0, 0, 0.25), 0 0 2px rgba(0, 0, 0, 0.25), 0 0 2px rgba(0, 0, 0, 0.15)",
        "custom-xs":
          "0 1px 2px rgba(0, 0, 0, 0.25), 0 0 3px rgba(0, 0, 0, 0.25), 0 0 3px rgba(0, 0, 0, 0.15)",
        "custom-sm":
          "0 2px 4px rgba(0, 0, 0, 0.25), 0 0 5px rgba(0, 0, 0, 0.25), 0 0 5px rgba(0, 0, 0, 0.15)",
        "custom-md":
          "0 3px 6px rgba(0, 0, 0, 0.25), 0 0 7px rgba(0, 0, 0, 0.25), 0 0 7px rgba(0, 0, 0, 0.15)",
        "custom-lg":
          "0 4px 8px rgba(0, 0, 0, 0.25), 0 0 10px rgba(0, 0, 0, 0.25), 0 0 10px rgba(0, 0, 0, 0.15)",
      },
      transitionDuration: {
        "700": "700ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
      keyframes: {
        move: {
          "0%": {
            transform: "translateX(-150%)",
          },
          "100%": {
            transform: "translateX(300%)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(-50%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "move-skeleton": "move 2s linear infinite",
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const newUtilities = {
        ".btn-primary": {
          backgroundColor: theme("colors.primary.900"),
          color: theme("colors.grayscale.0"),
        },
        ".btn-primary:hover": {
          backgroundColor: theme("colors.primary.700"),
        },
        ".btn-light": {
          backgroundColor: theme("colors.grayscale.0"),
          color: theme("colors.primary.900"),
          border: `1px solid ${theme("colors.primary.900")}`,
        },
        ".btn-light:hover": {
          color: theme("colors.primary.200"),
          borderColor: theme("colors.primary.200"),
        },
        ".btn-danger": {
          backgroundColor: theme("colors.warning.100"),
          color: theme("colors.grayscale.0"),
        },
        ".btn-danger:hover": {
          backgroundColor: theme("colors.warning.50"),
        },
        ".btn-success": {
          backgroundColor: theme("colors.success.100"),
          color: theme("colors.grayscale.0"),
        },
        ".btn-success:hover": {
          backgroundColor: theme("colors.success.50"),
        },
        ".btn-blue": {
          backgroundColor: theme("colors.secondary.500"),
          color: theme("colors.grayscale.0"),
        },
        ".btn-blue:hover": {
          backgroundColor: theme("colors.secondary.300"),
        },
        ".btn-gray": {
          backgroundColor: theme("colors.grayscale.200"),
          color: theme("colors.grayscale.600"),
        },
        ".btn-gray:hover": {
          color: theme("colors.grayscale.500"),
        },
        ".btn-disabled": {
          backgroundColor: theme("colors.grayscale.200"),
          color: theme("colors.grayscale.400"),
          cursor: "not-allowed",
          border: "none",
        },
        ".btn-disabled:hover": {
          border: "none",
        },
        ".h1": {
          fontSize: "60px",
          lineHeight: "72px",
          letterSpacing: "-1%",
        },
        ".h2": {
          fontSize: "48px",
          lineHeight: "140%",
          letterSpacing: "0%",
        },
        ".h3": {
          fontSize: "36px",
          lineHeight: "40px",
          letterSpacing: "0%",
        },
        ".h4": {
          fontSize: "30px",
          lineHeight: "36px",
          letterSpacing: "0%",
        },

        ".b1": {
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "0%",
        },
        ".b2": {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0%",
        },
        ".b3": {
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "0%",
        },
        ".b4": {
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0%",
        },
        ".b5": {
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0%",
        },
        ".caption": {
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0%",
        },
        ".text-overflow-1": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          wordBreak: "break-word",
          display: "-webkit-box",
          "-webkit-line-clamp": "1",
          "-webkit-box-orient": "vertical",
        },
        ".text-overflow-2": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          wordBreak: "break-word",
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
        },
        ".text-overflow-3": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          wordBreak: "break-word",
          display: "-webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
        },
        ".text-overflow-4": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          wordBreak: "break-word",
          display: "-webkit-box",
          "-webkit-line-clamp": "4",
          "-webkit-box-orient": "vertical",
        },
        ".text-overflow-5": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          wordBreak: "break-word",
          display: "-webkit-box",
          "-webkit-line-clamp": "5",
          "-webkit-box-orient": "vertical",
        },
        ".no-scrollbar": {
          "scrollbar-width": "none",
          "&::-webkit-scollbar": {
            display: "none",
          },
        },
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
