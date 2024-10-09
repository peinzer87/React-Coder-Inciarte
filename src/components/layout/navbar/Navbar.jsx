import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <img
          src="https://w7.pngwing.com/pngs/156/836/png-transparent-under-armour-connected-fitness-clothing-discounts-and-allowances-sneakers-adidas-angle-text-logo.png"
          alt="logo"
          className="logo-nav"
        />

        <ul className="navList">
          <li>Hombres</li>
          <li>Mujeres</li>
          <li>Niños</li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
