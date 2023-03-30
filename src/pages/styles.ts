import { Themes } from '@/assets/styles/themes/themes';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }: { theme: Themes }) => theme.font.sizes.medium};
`;
