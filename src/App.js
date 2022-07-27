import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";

function App() {
 const [pizzas,setPizzas] = useState([])
 
 
  useEffect(() => {
    fetch("https://62d01fd51cc14f8c0884e2b6.mockapi.io/pizza")
      .then((res) => res.json())
      .then((data) =>setPizzas(data));
  }, []);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage pizzas={pizzas} />} />
      </Routes>
    </div>
  );
}

export default App;
