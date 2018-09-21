import styled from 'styled-components';

export const SignInGeneralStyled = styled.div`
  width: 500px;
  margin-top: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin-top: 10px;
    text-decoration: underline;
  }
`;

export const ElementFormSignInStyled = styled.div`
  flex: 0 0 100%;
  width: 100%;
`;

export const SignInActionStyled = styled.button`
  text-align: center;
  width: 40%;
  height: 56px;
  align-items: center;
  border-radius: 4px;
  display: flex;
  font-size: 18px;
  padding: 0px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #385d7e;
  background: #385d7e;
  border: 1px solid #385d7e;
  margin: auto;
  justify-content: center;
  cursor: pointer;
  &:hover{
    background: #fff;
    color: #385d7e;
  }
  &:focus{
    outline: none;
  }
  @media (max-width: 768px){
    height: 40px;
    font-size: 12px;
  }
`;
