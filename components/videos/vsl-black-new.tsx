import { useEffect } from "react";

export default function VSLBlackNew() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="69ad614fa584f1a405fe5047"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/216860cd-fdff-477f-83e3-43b0a489ac1a/players/69ad614fa584f1a405fe5047/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="69ad614fa584f1a405fe5047"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-69ad614fa584f1a405fe5047" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "12px",
      }} 
    />
  );

};