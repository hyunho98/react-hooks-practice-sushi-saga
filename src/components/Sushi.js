import React, { useState } from "react";

function Sushi({ name, img, price, onEatSushi }) {
  const [eaten, setEaten] = useState(false)

  function sushiClickHandler() {
    onEatSushi(price)
    if (onEatSushi(price))
      setEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={sushiClickHandler}>
        {eaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
