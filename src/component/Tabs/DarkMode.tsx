import React from "react"; 
import { useDarkMode } from "../Context/DarkModeContext";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return ( const { order, loading, error } = useOrder()

  if (loading) return <p>Loading order...</p>
  if (error) return <p>Error: {error}</p>
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setDarkMode((prev) => !prev)}>Toggle Mode</button>
    </div>
  );
};

export default DarkMode;
