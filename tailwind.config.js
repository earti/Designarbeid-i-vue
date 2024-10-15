import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      /*
      primary = Nabla blue
      secondary = Nabla gold
      success = greens
      error = reds
      warning = same as secondary, room for modification
      red, green = same as success and error, room for modification
      blue, pink = highlights
      */

      /*
      Updating colors elsewhere:
      /src/components
      */
      transparent: 'transparent',
      current: 'currentColor',
      
      primary: {
        classic: {
          25: '#FAFEFF',
          50: '#D9F7FF',
          100: '#B2E8FD',
          200: '#8FD7FB',
          300: '#67BDF6',
          400: '#419CEB',
          500: '#2279D9',
          600: '#165FC6',
          700: '#1045A6',
          800: '#0F3689',
          900: '#0E276A',
          950: '#0C1B4A',
          light: '#419CEB', //400
          DEFAULT: '#1045A6', //700
          dark: '#0E276A', //900
        },
        modern: {
          25: '#F5FDFF',
          50: '#DFF6FD',
          100: '#C6EDFA',
          200: '#A1DBF2',
          300: '#73C3E6',
          400: '#45A4D3',
          500: '#2080B6',
          600: '#096096',
          700: '#014676',
          800: '#013660',
          900: '#042949',
          950: '#051C33',
          light: '#45A4D3', //400
          DEFAULT: '#014676', //700
          dark: '#042949', //900
        }
      },
      secondary: {
        classic: {
          25: '#FFFCF3',
          50: '#FEECBD',
          100: '#FEDC8C',
          200: '#FDCB61',
          300: '#FBB93C',
          400: '#F8A71B',
          500: '#F09509',
          600: '#DB8103',
          700: '#BE6D04',
          800: '#A25A07',
          900: '#794209',
          950: '#4E2B09',
          light: '#FDCB61', //200
          DEFAULT: '#F09509', //500
          dark: '#BE6D04', //700
        },
        modern: {
          25: '#FFFBF3',
          50: '#FFE6BE',
          100: '#FED08C',
          200: '#FDBA61',
          300: '#FBA73C',
          400: '#F8951B',
          500: '#F08709',
          600: '#DB7703',
          700: '#BE6704',
          800: '#965206',
          900: '#723F08',
          950: '#4E2C09',
          light: '#FDBA61', //200
          DEFAULT: '#F08709', //500
          dark: '#BE6704', //700
        }
      },
      gray: {
        classic: {
          25: '#FCFCFD',
          50: '#F2F3F5',
          100: '#E4E7EB',
          200: '#CCD1DB',
          300: '#B0B6C7',
          400: '#8B95A8',
          500: '#646F85',
          600: '#444F67',
          700: '#2C364E',
          800: '#1B2439',
          900: '#111728',
          950: '#0B0F19',
          light: '#CCD1DB', //200
          DEFAULT: '#444F67', //600
          dark: '#2C364E', //700
        },
        modern: {
          25: '#FCFCFD',
          50: '#F6F7F9',
          100: '#EBEEF2',
          200: '#D7DDE6',
          300: '#B9C1CF',
          400: '#8F9AAD',
          500: '#667287',
          600: '#465267',
          700: '#303B4E',
          800: '#212A39',
          900: '#181E28',
          950: '#101319',
          light: '#D7DDE6', //200
          DEFAULT: '#465267', //600
          dark: '#303B4E', //700
        }
      },
      success: {
        classic: {
          25: '#F6FEF8',
          50: '#D0F7D9',
          100: '#ABF2BB',
          200: '#84EC9D',
          300: '#57E47A',
          400: '#32D55C',
          500: '#12B73E',
          600: '#03982B',
          700: '#017A22',
          800: '#03601D',
          900: '#054818',
          950: '#053313',
          light: '#57E47A', //300
          DEFAULT: '#03982B', //600
          dark: '#03601D', //800
        },
        modern: {
          25: '#F6FEF9',
          50: '#CEF7DF',
          100: '#A9F2C8',
          200: '#85ECB1',
          300: '#62E49A',
          400: '#3FD581',
          500: '#23B765',
          600: '#12984F',
          700: '#0D7A40',
          800: '#0A6033',
          900: '#0A4828',
          950: '#0B331F',
          light: '#62E49A', //300
          DEFAULT: '#12984F', //600
          dark: '#0A6033', //800
        }
      },
      error: {
        classic: {
          25: '#FFFBF9',
          50: '#FBDFD3',
          100: '#F6C2AE',
          200: '#F29F84',
          300: '#EC7D5E',
          400: '#E65A3A',
          500: '#DC3C1F',
          600: '#CB2710',
          700: '#AE180A',
          800: '#84120A',
          900: '#600D0B',
          950: '#3C0909',
          light: '#EC7D5E', //300
          DEFAULT: '#CB2710', //600
          dark: '#84120A', //800
        },
        modern: {
          25: '#FFF9F9',
          50: '#FBD8D6',
          100: '#F6B6B2',
          200: '#F29691',
          300: '#ED7670',
          400: '#E85651',
          500: '#E03732',
          600: '#D2241F',
          700: '#B51916',
          800: '#8A1514',
          900: '#671312',
          950: '#4A1010',
          light: '#ED7670', //300
          DEFAULT: '#D2241F', //600
          dark: '#8A1514', //800
        }
      },
      warning: {
        classic: {
          25: '#FFFCF3',
          50: '#FEECBD',
          100: '#FEDC8C',
          200: '#FDCB61',
          300: '#FBB93C',
          400: '#F8A71B',
          500: '#F09509',
          600: '#DB8103',
          700: '#BE6D04',
          800: '#A25A07',
          900: '#794209',
          950: '#4E2B09',
          light: '#FBB93C', //300
          DEFAULT: '#F09509', //500
          dark: '#BE6D04', //700
        },
        modern: {
          25: '#FFFBF3',
          50: '#FFE6BE',
          100: '#FED08C',
          200: '#FDBA61',
          300: '#FBA73C',
          400: '#F8951B',
          500: '#F08709',
          600: '#DB7703',
          700: '#BE6704',
          800: '#965206',
          900: '#723F08',
          950: '#4E2C09',
          light: '#FBA73C', //300
          DEFAULT: '#F08709', //500
          dark: '#BE6704', //700
        }
      },
      pink: {
        classic: {
          25: '#FCF2F3',
          50: '#FAD0D7',
          100: '#F7B1BE',
          200: '#F290A6',
          300: '#EA698B',
          400: '#DE3D6D',
          500: '#BD1C51',
          600: '#A30B42',
          700: '#860438',
          800: '#6B0431',
          900: '#53072A',
          950: '#410925',
          light: '#EA698B', //300
          DEFAULT: '#DE3D6D', //400
          dark: '#A30B42', //600
        },
        modern: {
          25: '#FCF2F3',
          50: '#FAD9DE',
          100: '#F7BEC9',
          200: '#F29CAF',
          300: '#EA7A98',
          400: '#DE547D',
          500: '#CA3264',
          600: '#AE1D51',
          700: '#8D1444',
          800: '#73123C',
          900: '#5C1034',
          950: '#48112C',
          light: '#EA7A98', //300
          DEFAULT: '#DE547D', //400
          dark: '#AE1D51', //600
        }
      },
      blue: {
        classic: {
          25: '#F2FBFC',
          50: '#CCF4FA',
          100: '#A6ECF9',
          200: '#7FE1F7',
          300: '#55CDEB',
          400: '#30B4DA',
          500: '#1994BB',
          600: '#0C7095',
          700: '#05587A',
          800: '#054663',
          900: '#07344B',
          950: '#082739',
          light: '#55CDEB', //300
          DEFAULT: '#1994BB', //500
          dark: '#05587A', //700
        },
        modern: {
          25: '#F2FBFC',
          50: '#CEF5FA',
          100: '#ACEFF9',
          200: '#89E7F7',
          300: '#63D5EB',
          400: '#3FBEDA',
          500: '#239DBB',
          600: '#137995',
          700: '#0E617A',
          800: '#0C4E63',
          900: '#0E3D4E',
          950: '#0F2F3B',
          light: '#63D5EB', //300
          DEFAULT: '#239DBB', //500
          dark: '#0E617A', //700
        }
      },
      red: {
        classic: {
          25: '#FFFBF9',
          50: '#FBDFD3',
          100: '#F6C2AE',
          200: '#F29F84',
          300: '#EC7D5E',
          400: '#E65A3A',
          500: '#DC3C1F',
          600: '#CB2710',
          700: '#AE180A',
          800: '#84120A',
          900: '#600D0B',
          950: '#3C0909',
          light: '#E65A3A', //400
          DEFAULT: '#CB2710', //600
          dark: '#AE180A', //700
        },
        modern: {
          25: '#FFF9F9',
          50: '#FBD8D6',
          100: '#F6B6B2',
          200: '#F29691',
          300: '#ED7670',
          400: '#E85651',
          500: '#E03732',
          600: '#D2241F',
          700: '#B51916',
          800: '#8A1514',
          900: '#671312',
          950: '#4A1010',
          light: '#E85651', //400
          DEFAULT: '#D2241F', //600
          dark: '#B51916', //700
        }
      },
      green: {
        classic: {
          25: '#F6FEF8',
          50: '#D0F7D9',
          100: '#ABF2BB',
          200: '#84EC9D',
          300: '#57E47A',
          400: '#32D55C',
          500: '#12B73E',
          600: '#03982B',
          700: '#017A22',
          800: '#03601D',
          900: '#054818',
          950: '#053313',
          light: '#32D55C', //400
          DEFAULT: '#03982B', //600
          dark: '#017A22', //700
        },
        modern: {
          25: '#F6FEF9',
          50: '#CEF7DF',
          100: '#A9F2C8',
          200: '#85ECB1',
          300: '#62E49A',
          400: '#3FD581',
          500: '#23B765',
          600: '#12984F',
          700: '#0D7A40',
          800: '#0A6033',
          900: '#0A4828',
          950: '#0B331F',
          light: '#3FD581', //400
          DEFAULT: '#12984F', //600
          dark: '#0D7A40', //700
        }
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'zilla': ['ZillaSlab', 'sans-serif'],
    },
    //Poppins has font weights 100-900
    //Lato has font weights 100, 300-400, 700, 900
    //Zilla has font weights 300-700
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    //[fontSize, { lineHeight?, letterSpacing?, fontWeight? }]
    fontSize: { 
      //normal
      'l': ['18px', {lineHeight: '26px'}],
      'm': ['16px', {lineHeight: '24px'}],
      's': ['14px', {lineHeight: '22px'}],

      //bold, only for Lato!!
      'l-bold': ['18px', {lineHeight: '26px', fontWeight: 700}],
      'm-bold': ['16px', {lineHeight: '24px', fontWeight: 700}],
      's-bold': ['14px', {lineHeight: '22px', fontWeight: 700}],

      //title
      'title-1': ['56px', {lineHeight: '72px', fontWeight: 700}],
      'title-2': ['48px', {lineHeight: '60px', fontWeight: 700}],
      'title-3': ['36px', {lineHeight: '48px', fontWeight: 500}],
      'title-4': ['32px', {lineHeight: '44px', fontWeight: 500}],
      'title-5': ['24px', {lineHeight: '32px', fontWeight: 500}],
      'title-6': ['20px', {lineHeight: '26px', fontWeight: 500}],

      //subtitle
      'subtitle-1': ['18px', {lineHeight: '26px', fontWeight: 300}],
      'subtitle-2': ['36px', {lineHeight: '48px', fontWeight: 500}],
      'subtitle-3': ['32px', {lineHeight: '44px', fontWeight: 500}],
      'subtitle-4': ['28px', {lineHeight: '40px', fontWeight: 500}],
      'subtitle-5': ['24px', {lineHeight: '32px', fontWeight: 500}],
      'subtitle-6': ['20px', {lineHeight: '26px', fontWeight: 500}],
    },

    //only above this line have been customized and "finalized", I'll fix the rest later

    spacing: {
      'header': '64px',
      'footer': '240px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      80: '320px',
      92: '368px',
      100: '400px',
      120: '480px',
      140: '560px',
      160: '640px',
      180: '720px',
      200: '800px',
      240: '960px',
      280: '1120px', //MainContent width
    },
    maxWidth: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      80: '320px',
      92: '368px',
      100: '400px',
      120: '480px',
      240: '960px',
      280: '1120px',
    },
    maxHeight: {
      'header': '64px',
      'footer': '240px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      80: '320px',
      92: '368px',
      100: '400px',
      120: '480px',
      240: '960px',
      280: '1120px',
    },
    minHeight: {
      screen: 'calc(100vh - 60px - 2*40px - 214px)', //MainContent height
      'header': '64px',
      'footer': '240px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      80: '320px',
      92: '368px',
      100: '400px',
      120: '480px',
      240: '960px',
      280: '1120px',
    },
    minWidth: {
      'header': '64px',
      'footer': '240px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      80: '320px',
      92: '368px',
      100: '400px',
      120: '480px',
      240: '960px',
      280: '1120px',
    },
    zIndex: {
      999999: '999999',
      99999: '99999',
      9999: '9999',
      999: '999',
      99: '99',
      9: '9',
      1: '1'
    },
    opacity: {
      65: '.65'
    },
    aspectRatio: {
      '4/3': '4 / 3',
      '21/9': '21 / 9'
    },
    borderWidth: {
      6: '6px',
      10: '10px',
      12: '12px'
    },
    boxShadow: {
      default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
      1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
      2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
    },
    dropShadow: {
      1: '0px 1px 0px #E2E8F0',
      2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      3: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      4: '0px 0px 2px rgba(0, 0, 0, 0.2)',
      5: '0px 1px 5px rgba(0, 0, 0, 0.2)'
    },
    plugins: [
      typography,
      forms,
      aspectRatio,
    ],
  }
}