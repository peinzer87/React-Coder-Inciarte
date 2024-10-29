import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <Link to="/cart" className="linkCarrito">
      <PiShoppingCartSimpleFill />
      <span>0</span>
    </Link>
  );
};
