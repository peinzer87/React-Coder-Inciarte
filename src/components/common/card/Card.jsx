import { Link } from "react-router-dom";
import "../card/card.css";

export const Card = ({ title, price, category, imageUrl, id }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt="imagen producto" />
      <h2>Producto: {title} </h2>
      <h3>Precio: {price} </h3>
      <h3>categoria: {category} </h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
