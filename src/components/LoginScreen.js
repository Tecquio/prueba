import React from "react";
export default function LoginScreen({ onLogin }) {
  return (
    <div>
      Login Screen
      <button onClick={onLogin}>Entrar</button>
    </div>
  );
}
