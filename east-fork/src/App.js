import React from "react";
import "./App.css";
import DropdownPage from "./pages/DropdownPage";
 
const App = () => {
  let currentYear = new Date().getFullYear()

    return (
      <div className="select-container-outer">
          <div className="navbar slideInUp"><h1>Choose your glazes:</h1></div>
          <DropdownPage />
          <div className="footer">
            <div className="footer-wrapper">
              <div className="footer-left">
                <p>All images and product information are by <a href="https://www.eastfork.com" target="_blank" rel="noreferrer">East Fork</a>. Click <a href="https://www.eastfork.com" target="_blank" rel="noreferrer"><strong>here</strong></a> to shop more beautiful pottery from <a href="https://www.eastfork.com" target="_blank" rel="noreferrer">East Fork</a></p></div>
              <div className="footer-right"><p>{currentYear} <a href="https://www.kaitlinpikul.com" target="_blank" rel="noreferrer">Kaitlin Pikul</a> </p></div>

            </div>
            </div>
      </div>
    );
};


export default App;
