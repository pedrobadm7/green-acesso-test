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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    color: #222;
    font-size: 24px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
