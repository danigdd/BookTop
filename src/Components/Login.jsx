import React from "react";
import styled from "styled-components";
import LogoSVG from "/preview.svg";

function Login() {
  return (
    <Page>
      <Container>
        <Logo>
          <img src={LogoSVG} />
        </Logo>
        <FormTitle>
          <h1>BookPop</h1>
          <h2>Iniciar sesión</h2>
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
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-bg);
`;
const Container = styled.div`
  width: 80%;
  max-width: 420px;

  height: fit-content;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-accent);
  padding: 15px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  width: 110px;
  height: 100px;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  color: var(--color-text);
  h1 {
    margin: 0;
  }
  h2 {
    color: var(--color-text-muted);
  }
`;

const FormContainer = styled.form`
  margin-top: 30px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const FormBlock = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  label {
    height: fit-content;
  }

  input {
    height: fit-content;
    width: 100%;
    padding: 10px 10px;
    border: 0;
    border-radius: 10px;
  }
`;

const FormButton = styled.button`
  border-radius: 8px;
  padding: 10px 35px;
  margin-bottom: 30px;
  border: 0;
  background-color: var(--color-accent);

  &:hover {
    background-color: var(--color-accent-hover);
    cursor: pointer;
    transition: 0.2s;
  }
`;

const CreateAccount = styled.div`
  align-self: start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  margin-bottom: 15px;
`;

const Link = styled.span`
  cursor: pointer;
`;
export default Login;
