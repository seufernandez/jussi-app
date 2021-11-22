// eslint-disable-next-line import/no-extraneous-dependencies
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '560px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '2400px',
});

export const theme = extendTheme({
  breakpoints,

  colors: {
    green: {
      '900': '#00130C',
      '800': '#005D3C',
      '700': '#00A76D',
      '600': '#00CC85',
      '500': '#03FFA5',
      '400': '#4DFFC1',
      '300': '#82FFD3',
      '200': '#C9FFEC',
      '100': '#DBFFF3',
    },

    pink: {
      '900': '#33031B',
      '800': '#650636',
      '700': '#980950',
      '600': '#BA0B62',
      '500': '#EE0E7D',
      '400': '#F43E99',
      '300': '#F773B5',
      '200': '#FAA7D1',
      '100': '#FDE0EF',
    },

    gray: {
      '900': '#343434',
      '800': '#5B5B5B',
      '700': '#737373',
      '600': '#959595',
      '500': '#969696',
      '400': '#ADADAD',
      '300': '#C5C5C5',
      '200': '#E8E8E8',
      '100': '#F2F2F2',
    },
  },

  // no blue Border and FontWeight is normal
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        _focus: { boxShadow: 'none' },
      },
    },
  },

  fonts: {
    heading: 'Barlow',
    body: 'Barlow',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  styles: {
    global: {
      body: {
        bg: 'white',
        color: '',
      },
    },
  },
});

export const Input = {
  baseStyle: {
    field: {
      background: 'pink',
      color: 'gray.700',
    },
  },
  defaultProps: {
    focusBorderColor: 'brand.700',
  },
};
