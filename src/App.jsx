import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Login from "./Components/Login";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
