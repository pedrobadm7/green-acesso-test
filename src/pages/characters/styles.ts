import styled from 'styled-components';

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
