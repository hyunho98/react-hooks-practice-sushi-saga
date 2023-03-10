import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  useEffect(() => {
      fetch(API)
        .then((r) => r.json())
        .then((data) => {
          setSushi(data)
        })
  }, [])

  const [sushi, setSushi] = useState([])
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  function sushiEatHandler(price) {
    if ((money - price) >= 0) {
      setMoney(money - price)
      setPlates([...plates, ""])
      return true
    } else {
      return false
    }
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEatSushi={sushiEatHandler}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
