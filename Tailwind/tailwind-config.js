tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                display: ['Playfair Display', 'Georgia', 'serif'],
                mono:['JetBrains Mono', 'monospace'],
                body:['DM Sans', 'sans-serif'],
            },
        colors: {
        accent: '#E8C547',
        ink:'#0D0D0D',
        paper:  '#F5F0E8',
    },
    
    keyframes: {
        fadein: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        blink:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        slideRight: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } },
    },
    animation: {
            'fadein-1': 'fadein 0.7s ease both 0.1s',
            'fadein-2': 'fadein 0.7s ease both 0.3s',
            'fadein-3': 'fadein 0.7s ease both 0.5s',
            'fadein-4': 'fadein 0.7s ease both 0.7s',
            'blink':'blink 1s step-end infinite',
            'slide':'slideRight 0.4s ease both',
            }
        }
    }
}