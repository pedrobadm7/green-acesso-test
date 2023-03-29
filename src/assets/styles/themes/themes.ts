export interface Themes {
  font: {
    family: {
      roboto: string;
    };
    sizes: {
      xxxxsmall: string;
      xxxsmall: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
  };
  colors: {
    background: string;
    primary: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      white: string;
    };
    gray: {
      900: string;
      200: string;
      100: string;
    };
    danger: {
      light: string;
      main: string;
      dark: string;
    };
  };
}

export default {
  font: {
    family: {
      roboto: 'Roboto, sans-serif',
    },
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1rem',
      xxsmall: '1.2rem',
      xsmall: '1.4rem',
      small: '1.5rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.2rem',
      xxlarge: '2.4rem',
      xxxlarge: '3.2rem',
    },
  },
  colors: {
    background: '#F6F5FC',
    primary: {
      lighter: '#E0E3FF',
      light: '#6674F4',
      main: '#5061FC',
      dark: '#3346F0',
      white: '#FFFFFF',
    },
    gray: {
      900: '#222222',
      200: '#BCBCBC',
      100: '#E5E5E5',
    },
    danger: {
      light: '#F97171',
      main: '#FC5050',
      dark: '#F63131',
    },
  },
};
