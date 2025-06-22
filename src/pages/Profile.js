// src/pages/Profile.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
`;

export default function Profile() {
  return (
    <Container>
      <h2>Perfil</h2>
      <p>Ganancias: $120 MXN</p>
      <p>Nivel: 1</p>
    </Container>
  );
}
