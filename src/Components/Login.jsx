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
  width: 30%;
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
export default Login;
