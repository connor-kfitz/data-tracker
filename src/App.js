import React from "react";
import "./styles/app-style.css";

import Navigation from "./components/navigation";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Homepage></Homepage> 
    </div>
  );
}

export default App;
