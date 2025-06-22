// src/pages/Login.js
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px; max-width: 320px; margin: auto;
`;

const Input = styled.input`
  width: 100%; padding: 8px; margin-bottom: 12px;
`;

const Button = styled.button`
  width: 100%; padding: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff; border: none; cursor: pointer;
`;

export default function Login({ navigate }) {
  const [user, setUser] = useState("");
  const handleLogin = () => navigate("/dashboard");
  return (
    <Container>
      <h2>Iniciar sesión</h2>
      <Input placeholder="Usuario" value={user} onChange={e => setUser(e.target.value)} />
      <Input type="password" placeholder="Contraseña" />
      <Button onClick={handleLogin}>Entrar</Button>
    </Container>
  );
}
