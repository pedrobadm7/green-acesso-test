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
  padding: 0 0 0 10rem;
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

  strong {
    font-size: 2.4rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: ${theme.font.sizes.xxxlarge};
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
