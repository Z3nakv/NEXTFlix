import type { Config } from "tailwindcss";

const config: Config = {
    images: {
    unoptimized: true,
      },
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'xs': '300px',    // A partir de 300px
            'sm': '600px',    // A partir de 600px
            'md': '800px',    // A partir de 800px
            'lg': '1024px',   // A partir de 1024px
            'xl': '1200px',   // A partir de 1200px
            '2xl': '1500px',  // A partir de 1500px
            '3xl': '1800px',  // A partir de 1800px
          },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)']
            },
            backgroundImage: {
                'gradient-to-b':
                    'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%)',
                'gradientDetails':
                    'linear-gradient(360deg, rgba(3, 3, 3, 0.8) 2%, transparent 90%)',
                'gradient-to-t':
                    'linear-gradient(to top,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%)',
                'movieCardGragient':
                    'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, transparent 65%)',
                'gradiantLeft':
                    'linear-gradient(90deg, rgba(0,0,0,0.9002320185614849) 0%, rgba(0,0,0,0) 70%)',
                'gradiantBotton':
                    'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 70%)',
                'gradiantTop':
                    'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
                'gradiantBottonCard':
                    'linear-gradient(0deg, rgba(0,0,0,0.6951155462184874) 0%, rgba(0,0,0,0) 80%)',
                'gradiantTop2':
                    'linear-gradient(180deg, rgba(0,0,0,0.5914740896358543) 0%, rgba(0,0,0,0) 34%)',
                'footerGradiant':
                    'linear-gradient(180deg,#0000,oklch(61.64% 0.111 222.57 / 23.53%))',
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                txtGray1: '#999999',
                txtGray2: '#E0E0E0',
            },
            margin: {
                nav: '65px',
            },
            height: {
                nav: '65px',
                screenMovil: 'calc(100vh - 65px)',
            },
            fontSize: {
                titulo: 'calc(.9em + 3vw)',
            },
            screens: {
                mv: { min: '380px', max: '640px' },
                '3xl': { min: '1800px', max: '1920px' },
            },
            keyframes: {
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(-50%, -20%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(-50%, -50%)',
                    },
                },
                dataFadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10%)'
                    },
                    '100%': {
                        opacity: '1',
                    }
                },
                // dataFadeInDown: {
                //     '100%': {
                //         opacity: '1',
                //     },
                //     '0%': {
                //         opacity: '0',
                //         transform: 'translateY(10%)'
                //     }
                // },
            },
            animation: {
                fadeInUp: 'fadeInUp 700ms ease-in-out forwards',
                dataFadeInUp: 'dataFadeInUp 500ms ease-in-out forwards',
                dataFadeInDown: 'fadeInUp 500ms ease-in-out reverse forwards',
            },
        },
    },
    plugins: [],
};
export default config;
