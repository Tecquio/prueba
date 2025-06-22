// src/pages/Task.js
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
`;

const OptionButton = styled.button`
  display: block; width: 100%; margin-bottom: 8px;
  padding: 8px; background: ${({ theme }) => theme.colors.secondary};
  border: none; cursor: pointer; color: #fff;
`;

export default function Task({ id, navigate }) {
  const [selected, setSelected] = useState(null);
  const options = ["México", "Colombia", "Argentina"];
  const handleSubmit = () => navigate("/dashboard");
  return (
    <Container>
      <h3>Tarea #{id}</h3>
      {/* Aquí iría reproductor de audio */}
      {options.map(opt => (
        <OptionButton key={opt} onClick={() => setSelected(opt)}>
          {opt}
        </OptionButton>
      ))}
      <button onClick={handleSubmit} disabled={!selected}>Enviar</button>
    </Container>
  );
}
