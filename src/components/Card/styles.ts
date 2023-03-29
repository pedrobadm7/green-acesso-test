import { Themes } from '@/assets/styles/themes/themes';
import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    background-color: ${theme.colors.primary.white};
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 50%;
    min-width: 35rem;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    border-radius: ${theme.font.sizes.xxxsmall};
  `}

  @media (max-width: 904px ) {
    flex-direction: column;
  }
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
  }
`;

export const InfoContainer = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    padding: ${theme.font.sizes.xlarge};
  `}
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;

  @media (max-width: 904px) {
    ${({ theme }: { theme: Themes }) => css`
      padding: ${theme.font.sizes.xxlarge};
    `}
  }
`;
