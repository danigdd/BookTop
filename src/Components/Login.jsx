import React from "react";
import styled from "styled-components";
import LogoPng from "/logo_provisional.png";

function Login() {
  return (
    <Container>
      <Logo>
        <img src={LogoPng} />
      </Logo>
      <FormTitle>
        <h1>BookPop</h1>
      </FormTitle>
      <FormContainer>
        <FormBlock>
          <label>Correo electrónico</label>
          <input placeholder="johndoe@gmail.com" type="email"></input>
        </FormBlock>
        <FormBlock>
          <label>Contraseña</label>
          <input placeholder="* * * * * * * *" type="password"></input>
        </FormBlock>
        <FormButton>Entrar</FormButton>
      </FormContainer>
      <CreateAccount>
        ¿No estás en BookPop todavía?
        <Link>Crear Cuenta</Link>
      </CreateAccount>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 200px;
  background-color: white;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: green;
  }
`;

const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    margin: 0;
  }
`;

const FormContainer = styled.form`
  margin-top: 30px;
  width: 100%;
  height: fit-content;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const FormBlock = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: purple;
  gap: 10px;

  label {
    height: fit-content;
  }

  input {
    height: fit-content;
    width: 100%;
    padding: 10px 5px;
    border: 0;
  }
`;

const FormButton = styled.button`
  border-radius: 8px;
  padding: 10px 35px;
  margin-bottom: 20px;
`;

const CreateAccount = styled.div`
  align-self: start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
`;

const Link = styled.span`
  cursor: pointer;
`;
export default Login;
