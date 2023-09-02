import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState("wee");

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((data) => data.text())
      .then(setCount);
  }, []);

  return (
    <>
      <h1>WE DO SHIT</h1>
      <h2>Like fetching:</h2>
      <h3>{count}</h3>
    </>
  );
}

export default App;
