import styled from 'styled-components';

export const BlockHead = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  height: 42px;
  box-shadow: 0px -5px 50px 0px #00000020;
  @media(max-width: 1024px){
    padding: 0 8px;
  }
`;

export const BlockHeadTitle = styled.div`
  color: var(--zigvy-col-extra-light);
`;

export const TextTitle = styled.span`
  font-family: 'Proxima Nova Lt';
  text-transform: uppercase;
  margin-left: 8px;
  letter-spacing: 1px;
`;

export const BlockHeadFilter = styled.div`
  flex: 1;
`;
