import React from "react";
import Header from "../module/Header";
import Footer from "../module/Footer";
import Tabs from "./Tabs";
import { DarkModeProvider } from "./Context/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <div className="app-container">
        <Header />
        <main className="content">
          <Tabs />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default App;
