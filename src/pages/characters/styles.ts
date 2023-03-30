import { Themes } from '@/assets/styles/themes/themes';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

  @media (max-width: 904px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  ${({ theme }: { theme: Themes }) => css`
    padding: 0 0 0 10rem;
    margin: ${theme.font.sizes.xxxlarge} 0;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray[100]};

    strong {
      font-size: ${theme.font.sizes.xxlarge};
    }

    @media (max-width: 904px) {
      padding: 0;
    }
  `}
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    background-color: ${theme.colors.background};
    margin: ${theme.font.sizes.xxxsmall};
    border-radius: ${theme.font.sizes.xxxsmall};
    padding: ${theme.font.sizes.xxxsmall};
  `}

  @media (max-width: 904px ) {
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;

export const InfoContainer = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: ${theme.font.sizes.xxxlarge};
  `}
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.font.sizes.xxxsmall};
    justify-content: flex-start;
    padding: ${theme.font.sizes.xxxsmall};
  `}

  @media (max-width: 904px) {
    ${({ theme }: { theme: Themes }) => css`
      padding: ${theme.font.sizes.medium};
    `}
  }
`;
