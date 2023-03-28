import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { Themes } from './themes/themes';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    html {
      font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }: {theme: Themes}) => theme.colors.background};
        font-size: ${({theme}: {theme: Themes}) => theme.font.sizes.medium};
        color: ${({ theme }: {theme: Themes}) => theme.colors.gray[900]}
    }

    button {
        cursor: pointer;
    }
`;
