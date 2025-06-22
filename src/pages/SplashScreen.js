// src/pages/SplashScreen.js
import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex; align-items: center;
  justify-content: center; height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.h1`
  color: #fff; font-size: 32px;
`;

export default function SplashScreen({ navigate }) {
  useEffect(() => {
    setTimeout(() => navigate("/login"), 2000);
  }, [navigate]);
  return (
    <Container>
      <Logo>MicroTasks IA</Logo>
    </Container>
  );
}
