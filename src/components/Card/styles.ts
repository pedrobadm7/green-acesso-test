import { Themes } from '@/assets/styles/themes/themes';
import styled, { css } from 'styled-components';
import Image from 'next/image';

export const CardContainer = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    display: flex;
    flex-direction: row-reverse;
    width: 30rem;
    height: 15rem;
    background-color: ${theme.colors.primary.white};
    padding: 16px 24px;
    margin: 20px;
    transition: all 0.2s linear;
    border-radius: 1rem;
  `}

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 141px) {
    width: 29rem;
    height: 15rem;
  }
`;

export const CharacterInfo = styled.div`
  width: 80%;
  padding-left: 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-weight: bold;
    margin: 0.8rem 0;
  }

  h1 {
    font-size: 1.8rem;
    color: rgba(23, 23, 27, 0.6);
  }
`;

export const CharacterImage = styled(Image)`
  ${({ theme }: { theme: Themes }) => css`
    border-radius: 100%;
    border: 0.2rem solid ${theme.colors.primary.lighter};
    max-width: 100%;
  `}
`;

export const StatusAndSpecies = styled.div`
  ${({ theme }: { theme: Themes }) => css`
    display: flex;
    flex-direction: column;
    width: 10rem;

    span {
      background-color: ${theme.colors.background};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      border-radius: 3.2rem;
      margin-bottom: 0.6rem;
      margin-right: 1rem;
      padding: 0.5rem;
    }
  `}
`;
