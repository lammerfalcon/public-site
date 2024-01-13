import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './constants/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Karla']
            },

            colors: {
                'dove-gray': {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6b6b6b',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3d3d3d',
                    '950': '#262626',
                },
                'blue-chill': {
                    '50': '#f2f9f9',
                    '100': '#ddeff0',
                    '200': '#bfe0e2',
                    '300': '#92cace',
                    '400': '#5faab1',
                    '500': '#438e96',
                    '600': '#3b757f',
                    '700': '#356169',
                    '800': '#325158',
                    '900': '#2d464c',
                    '950': '#1a2c32',
                },
                'azure': {
                    50: '#eff8ff',
                    100: '#def0ff',
                    200: '#b6e3ff',
                    300: '#75cfff',
                    400: '#2cb7ff',
                    500: '#00a3ff',
                    600: '#007dd4',
                    700: '#0063ab',
                    800: '#00548d',
                    900: '#064674',
                    950: '#042c4d',
                },
                'mirage': {
                    50: '#EEF1F5',
                    100: '#EEF1F5',
                    200: '#d0d9e7',
                    300: '#B0B7C3',
                    400: '#B0B7C3',
                    500: '#69707D',
                    600: '#69707D',
                    700: '#2F3746',
                    800: '#232A37',
                    900: '#161c27',
                    950: '#161c27',
                },

                'silver-tree': {
                    50: '#effaf4',
                    100: '#d9f2e2',
                    200: '#b6e4ca',
                    300: '#86cfa9',
                    350: '#63D89B',
                    400: '#63D89B',
                    500: '#32976a',
                    600: '#227954',
                    700: '#1b6145',
                    800: '#184d38',
                    900: '#14402f',
                    950: '#0a241b',
                },

                'tahiti': {
                    50: '#cffafe',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                },

                'gorse': {
                    50: '#fefde8',
                    100: '#fffdc2',
                    200: '#fff889',
                    300: '#ffeb3b',
                    400: '#fddb12',
                    500: '#ecc106',
                    600: '#cc9702',
                    700: '#a36b05',
                    800: '#86540d',
                    900: '#724511',
                    950: '#432405',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
