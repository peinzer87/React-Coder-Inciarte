const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.title} </h2>
      <img src={item.imageUrl} alt="" />
    </div>
  );
};

export default ItemDetail;
