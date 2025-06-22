// src/pages/Dashboard.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 16px;
`;

const TaskCard = styled.div`
  background: #fff; border-radius: 8px; padding: 12px;
  margin-bottom: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff; border: none; padding: 8px 16px; cursor: pointer;
`;

export default function Dashboard() {
  const tasks = [
    { id: 1, text: "Clasificar acento del audio" },
    { id: 2, text: "Analizar sentimiento de texto" }
  ];
  return (
    <Container>
      <h2>Dashboard</h2>
      {tasks.map(t => (
        <TaskCard key={t.id}>
          <p>{t.text}</p>
          <Link to={`/task/${t.id}`}>
            <Button>Comenzar</Button>
          </Link>
        </TaskCard>
      ))}
    </Container>
  );
}
