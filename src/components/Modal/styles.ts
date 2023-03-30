import { Themes } from '@/assets/styles/themes/themes';
import styled from 'styled-components';
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;
export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 20px;
`;
export const Header = styled.div`
  background-color: ${({ theme }: { theme: Themes }) =>
    theme.colors.background};
  height: 5rem;
  border-radius: 0.8rem 0.8rem 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  align-self: center;
`;
export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }: { theme: Themes }) =>
    theme.colors.background};
  border: none;
  width: 4rem;
  height: 4rem;
`;

export const Content = styled.div`
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  width: 40rem;
`;
