import { Themes } from '@/assets/styles/themes/themes';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 904px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  ${({ theme }: { theme: Themes }) => css`
    margin: ${theme.font.sizes.xxxlarge} 0;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray[100]};
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 4.5rem 25rem;

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
