import React, { useState } from "react";
import "./PageBuy.css";
import Menu from "../Menu/Menu";
import Description from "../Descripton/Description";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import image from "../Assets/images/coca-zero.png";
import image1 from "../Assets/images/fanta.png";
import image3 from "../Assets/images/sprite.jpg";
import Footer from "../Footer/Footer";

const refrigerantes = [
  { name: "Coca Cola Zero", image: image, value: 8.0 },
  { name: "Fanta Laranja", image: image1, value: 6.0 },
  { name: "Sprite", image: image3, value: 5.0 },
];

function PageBuy() {
  const location = useLocation();
  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(0);
  const [selectedRefrigerante, setSelectedRefrigerante] = useState(
    refrigerantes[0]
  );

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleSelectChange = (event) => {
    const selected = refrigerantes.find(
      (refrigerante) => refrigerante.name === event.target.value
    );
    setSelectedRefrigerante(selected);
  };

  const totalCoca = quantity * selectedRefrigerante.value;
  const productPrice = parseFloat(product.price.replace("R$", "").trim());
  const totalValueFood = productPrice + totalCoca;

  return (
    <div className="container">
      <Menu />
      <div className="img-container">
        <img src={product.image} alt="" className="img" />
        <Description className="descricao" product={product} />
        <div className="refrigerante">
          <div className="selecimg">
          <img src={selectedRefrigerante.image} alt="" />
          <div className="select-container">
            <select
              onChange={handleSelectChange}
              value={selectedRefrigerante.name}
              className="styled-select"
            >
              {refrigerantes.map((refrigerante) => (
                <option key={refrigerante.name} value={refrigerante.name}>
                  {refrigerante.name}
                </option>
              ))}
            </select>
          </div>
          </div>
          <div className="counter">
            <p className="counter-price">R$: {totalCoca.toFixed(2)}</p>
            <div className="counter-controls">
              <button className="counter-button" onClick={handleDecrement}>
                -
              </button>
              <p className="counter-quantity">{quantity}</p>
              <button className="counter-button" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
         
        </div>
        <div className="total-price">
          <h3>Valor Total: R$ {totalValueFood.toFixed(2)}</h3>
        </div>
        <Button to="/finalize">Finalizar Pedido</Button>
      </div>
      <Footer />
    </div>
  );
}

export default PageBuy;
