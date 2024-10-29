import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/">
          <img
            src="https://w7.pngwing.com/pngs/156/836/png-transparent-under-armour-connected-fitness-clothing-discounts-and-allowances-sneakers-adidas-angle-text-logo.png"
            alt="logo"
            className="logo-nav"
          />
        </Link>
        <ul className="navList">
          <Link to="category/Hombre">Hombres</Link>
          <Link to="category/Mujer">Mujeres</Link>
          <Link to="category/Niños">Niños</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
