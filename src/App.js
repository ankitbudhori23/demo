import Navbar from "./components/Navbar";
import Herosec from "./components/Main/Herosec";
import Number from "./components/Main/Number";
import Bestseller from "./components/Main/Bestseller";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Herosec />
      <Number />
      <Bestseller />
    </div>
  );
}

export default App;
