import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, onEatSushi }) {
  const [sushiCount, setSushiCount] = useState(0)

  const renderSushi = sushi.slice(sushiCount, sushiCount + 4).map((sush) => {
    return (
      <Sushi 
        key={sush.id}
        name={sush.name}
        img={sush.img_url}
        price={sush.price}
        onEatSushi={onEatSushi}
      />
    )  
  })

  function moreSushiHandler() {
    setSushiCount(sushiCount + 4)
  }

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton onMoreClick={moreSushiHandler}/>
    </div>
  );
}

export default SushiContainer;
