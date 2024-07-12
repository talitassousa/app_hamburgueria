import "./Menu.css";
import image from "../Assets/images/logo.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="letras">
        <h3>
          <Link to="/about"> Quem somos? </Link> |
          <Link to="/"> Faça seu pedido</Link>
        </h3>
      </div>
    </div>
  );
}

export default Menu;

