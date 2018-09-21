import styled from 'styled-components';

export const SelectCustomize = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  select{
    cursor: pointer;
    padding-right: 15px;
    border: none;
    background: none;
    font-size: var( --zigvy-fs-small);
    color: var(--col-zigvy-select);
    font-family: 'Proxima Nova Rg';
    -moz-appearance: none;
    -webkit-appearance: none;
    &:focus{
      outline: none;
    }
    &::-ms-expand{
      display: none;
    }
  }
  &:after{
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    border-color: var(--zigvy-col-triangle) transparent transparent transparent;
    position: absolute;
    top: 5px;
  }
`;
