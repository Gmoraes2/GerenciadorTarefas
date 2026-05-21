import { useState } from "react";
import Button from "./componentes/Button";
import Title from "./componentes/Title";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  function Logar() {
    navigate("/add-task");
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="my-4 w-[500px] space-y-4 p-6">
        <Title className="text-4xl font-bold text-center ">Login</Title>
        <button onClick={Logar} className="bg-slate-600 text-white ">
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
