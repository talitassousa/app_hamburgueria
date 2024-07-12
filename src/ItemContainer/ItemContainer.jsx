import "./ItemContainer.css";
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { products } from "../service/getHamburguer/getHamburguer";
import Button from "../Button/Button";

function ItemContainer() {
  return (
    <div className="itemContainer">
      {products.map((product, index) => (
        <div className="img1" key={index}>
          <div className="texto-menu">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <h3 style={{ fontWeight: "lighter" }}>{product.description}</h3>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="simple-controlled" value={product.star} readOnly />
            </Box>
            <p className="valor">{product.price}</p>
            <Button to="/pageBuy" state={{ product }}>
              Comprar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemContainer;