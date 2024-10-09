import "../card/card.css";

export const Card = ({ title, price }) => {
  return (
    <div className="product-card">
      <h2>Producto: {title} </h2>
      <h3>Precio: {price} </h3>
      <button>Comprar</button>
    </div>
  );
};
