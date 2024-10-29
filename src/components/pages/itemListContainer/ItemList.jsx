import { Card } from "../../common/card/Card";

export const ItemList = ({ myProducts }) => {
  return myProducts.map(({ id, imageUrl, title, price, category }) => (
    <Card
      key={id}
      imageUrl={imageUrl}
      title={title}
      price={price}
      category={category}
      id={id}
    />
  ));
};
