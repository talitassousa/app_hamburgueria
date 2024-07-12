import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import "./Description.css";

function Description({ product }) {
  console.log(product, "product");

  return (
    <div>
      <div>
        <h1>{product.title}</h1>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating name="simple-controlled" value={product.star} readOnly />
        </Box>
      </div>
      <div>
        <h2 style={{ fontWeight: "lighter", color: "#B0ADAD" }}>
          {product.description}
        </h2>
        <h2 style={{ color: "#B8860B", fontWeight: "lighter" }}>
          {`A partir de ${product.price}`}
        </h2>
      </div>
    </div>
  );
}

export default Description;
