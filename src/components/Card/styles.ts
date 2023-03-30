import { Themes } from '@/assets/styles/themes/themes';
import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    background-color: ${theme.colors.primary.white};
    display: flex;
    flex-direction: row;
    margin: 5px;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    border-radius: ${theme.font.sizes.xxxsmall};
  `}

  @media (max-width: 904px ) {
    flex-direction: column;
  }
`;
