import { Card } from "../../common/card/Card";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  return (
    <div className="mainProduct">
      <Card title="Zapatillas" price={400} />
      <Card title="Camiseta" price={800} />
      <Card title="Campera" price={350} />
      <Card title="Short" price={750} />
    </div>
  );
};
