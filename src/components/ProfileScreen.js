import React from "react";
export default function ProfileScreen({ onNavigate }) {
  return (
    <div>
      Profile Screen
      <button onClick={() => onNavigate("dashboard")}>Dashboard</button>
    </div>
  );
}
