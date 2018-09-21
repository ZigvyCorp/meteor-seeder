import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  width: 140px;
  height: 45px;
  background: var( --zigvy-col-border); 
  color: var( --zigvy-col-light);
  font-size: calc(var(--zigvy-fs-large) + 1px);
  text-transform: uppercase;
  justify-content: center;
  border-radius: 5px;
  font-family: 'Proxima Nova Lt';
  cursor: pointer;
  i{
    margin-right: 8px;
  }
  &:hover{
    ${({ disabled }) => !disabled && css`
      opacity: .5;
      background: var( --zigvy-col-light);
      color: var( --zigvy-col-border);
      transition: background-color 0.5s ease;
    `}
  }
  
  ${({ primary }) => primary && css`
    background: var( --zigvy-col-btn-primary);
    color: white;
    
    &:hover {
      ${({ disabled }) => !disabled && css`
        background: var(--zigvy-col-blue);
        opacity: 1;
        color: white;
        transition: background-color 0.5s ease;
      `}
    }
  `}
  
  ${({ danger }) => danger && css`
    border: none;
    background: none;
    text-decoration: underline;
    color: var(--zigvy-col-danger);
    font-family: 'Proxima Nova Rg';
    
    &:hover {
      ${({ disabled }) => !disabled && css`
        opacity: 1;
        background: none;
        color: var( --zigvy-col-danger);
        transition: background-color 0.5s ease;
      `}
    }
  `}
  
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export const ButtonCalling = ButtonStyled.extend`
  border: 1px solid  var( --zigvy-col-btn-primary);
  background: var( --zigvy-col-btn-primary);
  color: var( --zigvy-col-light);
  margin-left: 15px;
  &:hover{
    opacity: .5;
    background: var( --zigvy-col-light);
    color: var( --zigvy-col-btn-primary);
  }
`;

export const ButtonEndCall = ButtonStyled.extend`
  border: 1px solid var( --zigvy-col-btn-primary);
  background: var( --zigvy-col-btn-primary);
  color: var( --zigvy-col-light);
  margin-left: 15px;
  &:hover{
    opacity: .5;s
    background: var( --zigvy-col-light);
    color: var( --zigvy-col-btn-primary);
  }
`;

export const ButtonNextCall = ButtonStyled.extend`
  border: 1px solid var(--zigvy-col-btn-second);
  background: var( --zigvy-col-btn-second);
  color: var( --zigvy-col-light);
  margin-left: 15px;
  &:hover{
    opacity: .5;
    background: var( --zigvy-col-light);
    color: var( --zigvy-col-btn-second);
  }
`;

export const ButtonYes = ButtonStyled.extend`
  border: 1px solid var( --zigvy-col-btn-Yes);
  background: var( --zigvy-col-light);
  color: var( --zigvy-col-btn-Yes);
  font-size: var(--zigvy-fs-regular);
  line-height: 34px;
  width: 70px;
  height: 34px;
  &:hover{
    opacity: .5;
    background: var( --zigvy-col-btn-Yes);
    color: var( --zigvy-col-light);
  }
`;

export const ButtonNo = ButtonStyled.extend`
  border: 1px solid var( --zigvy-col-btn-No);
  background: var( --zigvy-col-light);
  color: var( --zigvy-col-btn-No);
  font-size: var(--zigvy-fs-regular);
  line-height: 34px;
  margin-left: 10px;
  width: 70px;
  height: 34px;
  &:hover{
    opacity: .5;
    background: var( --zigvy-col-btn-No);
    color: var( --zigvy-col-light);
  }
`;
