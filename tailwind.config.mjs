import defaultTheme from "tailwindcss/defaultTheme";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Atkinson',
                    ...defaultTheme.fontFamily.sans
                ]
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: 'full'
  				}
  			}
  		},
  		rotate: {
  			'45': '45deg',
  			'135': '135deg',
  			'225': '225deg',
  			'315': '315deg'
  		},
  		animation: {
  			twinkle: 'twinkle 2s ease-in-out forwards',
  			meteor: 'meteor 3s ease-in-out forwards',
  			fadeIn: 'fadeIn 0.6s ease-out forwards',
  			glow: 'glow 2s ease-in-out infinite alternate',
  			cardEntry: 'cardEntry 0.8s ease-out forwards',
  			sectionEntry: 'sectionEntry 1s ease-out forwards',
  			shimmer: 'shimmer 2s linear infinite'
  		},
  		keyframes: {
  			twinkle: {
  				'0%': {
  					opacity: 0,
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					opacity: 1,
  					transform: 'rotate(180deg)'
  				},
  				'100%': {
  					opacity: 0,
  					transform: 'rotate(360deg)'
  				}
  			},
  			meteor: {
  				'0%': {
  					opacity: 0,
  					transform: 'translateY(200%)'
  				},
  				'50%': {
  					opacity: 1
  				},
  				'100%': {
  					opacity: 0,
  					transform: 'translateY(0)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			glow: {
  				'0%': {
  					'box-shadow': '0 0 20px #a855f7'
  				},
  				'100%': {
  					'box-shadow': '0 0 40px #a855f7'
  				}
  			},
  			cardEntry: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px) scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0) scale(1)'
  				}
  			},
  			sectionEntry: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			shimmer: {
  				'100%': {
  					'background-position': '200% center'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors, require("tailwindcss-animate")],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
