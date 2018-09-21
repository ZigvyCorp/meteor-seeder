import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  padding: ${({ padding }) => padding || '0 10px'}
`;

export const Column = styled.div`
  flex: 1 1 auto;
  margin: 5px;
`;
