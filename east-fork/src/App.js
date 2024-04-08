import React from "react";
import "./App.css";
import DropdownPage from "./pages/DropdownPage";
import  useWindowDimensions from "./hooks/useWindowDimensions"
 
const App = () => {
  const { height, width } = useWindowDimensions();
    return (
      <div className="select-container-outer" style={{
		    width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden"
		}}>
        {/* <div>
      width: {width}+ "px" ~ height: {height}
    </div> */}
          <div className="navbar"><h1>Choose your glazes:</h1></div>
          <DropdownPage />
          <div className="footer"></div>
      </div>
    );
};


export default App;
