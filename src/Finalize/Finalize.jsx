import "./Finalize.css";
import image from "../Assets/images/logo.png";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import React from "react";

function Finalize() {
  return (
    <div className="paginaFinal">
      <Menu />
      <div className="conteudo">
        <img src={image} alt="Logo" />
        <div className="text">
          <h1 className="text">Compra Finalizada com Sucesso!</h1>
          <h2 className="text">Agradecemos pela sua escolha.</h2>
        </div>
        <Button to="/">Voltar ao Menu</Button>
      </div>
      <div
        style={{
          height: 200,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default Finalize;
