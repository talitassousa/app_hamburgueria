import React from "react";
import "./Body.css";
import image from "../Assets/images/principal.png";
import ItemContainer from "../ItemContainer/ItemContainer";
import Button from "../Button/Button";
import { products } from "../service/getHamburguer/getHamburguer";

function Body() {
  const smashBaconDelicius = products.find(
    (product) => product.title === "Smash Bacon Delicius"
  );

  return (
    <div className="body">
      <div className="img">
        <div className="teste">
          <img src={image} alt="" />
        </div>
        <div className="texto-body">
          <h1>O MONSTRO CHEGOU!</h1>
          <h1 style={{ fontWeight: "lighter" }}>Smash Bacon Delicious</h1>
          <Button to="/pageBuy" state={{ product: smashBaconDelicius }}>
            EU QUERO!
          </Button>
        </div>
      </div>
      <div>
        <ItemContainer />
      </div>
    </div>
  );
}

export default Body;
