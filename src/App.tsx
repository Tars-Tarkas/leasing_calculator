import React from "react";
import "./App.scss";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Button>Оставить заявку</Button>
      <Input textIcon={`\u20bd`}></Input>
    </div>
  );
}

export default App;
