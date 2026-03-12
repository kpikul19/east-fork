import React from "react";
import "./App.css";
import DropdownPage from "./pages/DropdownPage";

const currentYear = new Date().getFullYear();

const App = () => (
  <div className="select-container-outer">
    <div className="navbar slideInUp">
      <h1>Choose your glazes:</h1>
    </div>
    <DropdownPage />
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <p>
            All images and product information are by{" "}
            <a href="https://www.eastfork.com" target="_blank" rel="noreferrer">
              East Fork
            </a>
            . Click{" "}
            <a href="https://www.eastfork.com" target="_blank" rel="noreferrer">
              <strong>here</strong>
            </a>{" "}
            to shop more beautiful pottery from{" "}
            <a href="https://www.eastfork.com" target="_blank" rel="noreferrer">
              East Fork
            </a>
            .
          </p>
        </div>
        <div className="footer-right">
          <p>
            {currentYear}{" "}
            <a
              href="https://www.kaitlinpikul.com"
              target="_blank"
              rel="noreferrer"
            >
              Kaitlin Pikul
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default App;