import React from "react";
export default function SplashScreen({ onLoaded }) {
  React.useEffect(() => {
    setTimeout(() => onLoaded(), 1500);
  }, [onLoaded]);
  return <div>Splash Screen</div>;
}
