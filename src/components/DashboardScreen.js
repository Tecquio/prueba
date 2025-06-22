import React from "react";
export default function DashboardScreen({ onNavigate }) {
  return (
    <div>
      Dashboard Screen
      <button onClick={() => onNavigate("task")}>Ir a Tarea</button>
      <button onClick={() => onNavigate("profile")}>Perfil</button>
    </div>
  );
}
