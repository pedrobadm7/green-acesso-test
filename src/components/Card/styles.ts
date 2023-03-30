import { Themes } from '@/assets/styles/themes/themes';
import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    width: 100%;
    max-width: 45rem;
    background-color: ${theme.colors.primary.white};
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    border-radius: ${theme.font.sizes.xxxsmall};
  `}

  @media (max-width: 904px ) {
    flex-direction: column;
    margin: 5rem 0;
    padding: 1.5rem 0;
  }
`;
