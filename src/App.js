import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [bevarage, setBevarage] = useState([])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    Promise.all([
      fetch("https://62d01fd51cc14f8c0884e2b6.mockapi.io/pizza"),
      fetch("https://62d01fd51cc14f8c0884e2b6.mockapi.io/pizza")
    ]).then((res) => {
      console.log(res)
      Promise.all(res.map((item) => item.json()))
        .then((data) => {
          console.log(data)
          setLoading(false)
          setPizzas(data[0])
          setBevarage(data[1])
        })
    })

  }, []);


// DOES'NOT WORK {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  })
  if (isLoading) {
    return <div className="Me">
      <img className="MeImg" src="./1.jpeg" />
      <div>
        <h1>
          <b>Wait<pre>  </pre></b>
          <i>im</i><pre>  </pre>
          <p><i className="i">thinking...</i></p>
        </h1>
      </div>
    </div>
  }
// DOES'NOT WORK }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage pizzasH={pizzas} bevarageH={bevarage} />} />
      </Routes>
    </div>
  );
}

export default App;
