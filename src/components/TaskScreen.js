import React from "react";
export default function TaskScreen({ onNavigate }) {
  return (
    <div>
      Task Screen
      <button onClick={() => onNavigate("dashboard")}>Volver</button>
    </div>
  );
}
