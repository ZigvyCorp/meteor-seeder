import styled, { css } from 'styled-components';

export const InputGroupPrepend = styled.div`
  padding: 0 15px;
  border: 1px solid var(--zigvy-col-border);
  border-right: none;
  height: 100%;
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: var(--zigvy-col-extra-light-grey);
  font-family: 'Proxima Nova Rg';
`;

export const Break = styled.div`
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
`;

export const FormGroupTextBoxStyled = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row wrap;
  
  input {
    height: 36px;
    border: 1px solid var(--zigvy-col-border);
    color: #515151;
    border-radius: 5px;
    padding: 0px 10px 0px 10px;
    flex: 1;
    background-color: transparent;
    font-size: 13px;  
    
    ${({ disabled }) => disabled && css`
     background-color: #f0f0f0;
     color: #999;
    `}
    &:focus{
      outline: none;
      border-color: var(--zigvy-col-border-focus);
    }
    @media (max-width: 768px){
      font-size: 11px;
    }
  }
  p{
    color: red;
    margin-top: 5px;
    font-size: 12px;
  }
  
  ${({ disabled }) => disabled && css`
    background-color: #ececec;
    span{
      z-index: 1;
    }
  `}
  ${({ bold }) => bold && css`
    input{
     font-weight: 600;
    }
  `}
  
  ${({ large }) => large && css`
    height: 45px;
    input {
      height: 45px
    }
  `}
  
  ${({ inputGroup }) => inputGroup && css`
    &:focus-within {
      .input-group-prepend {
        border-color: var(--zigvy-col-border-focus);
      }
    }
    input {
      padding-left: 0;
      border-left: none;
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
      
      &:focus{
        outline: none;
        border-left: none; 
    }
  `}
`;

export const Label = styled.span`
  margin-left: 25px;
`;

export const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 1px solid var(--zigvy-col-border);
    border-radius: 4px;
`;

export const CheckBoxWrapper = styled.label`
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 20px;
  
  input[type=checkbox] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
  }
  
  input:checked ~ ${CheckMark} {
    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
      display: block;
      width: 12px;
      height: 12px;
      background-color: var(--zigvy-col-blue);
      border-radius: 3px;
    }
  }
  
  &:hover {
    ${CheckMark} {
      
    }
  }
`;

export const FormGroupCheckBox = FormGroupTextBoxStyled.extend`

  input[type=checkbox] {
    height: auto;
    margin-right: 10px;
  }
`;
