import "./itemListContainer.css";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

// let misProductos = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (products.length === 0) {
//       rej("Productos Vacios");
//     } else {
//       res(products);
//     }
//   }, 2000);
// });

export const ItemListContainer = () => {
  const { category } = useParams();

  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const fraccionProd = products.filter((prod) => prod.category === category);
    const getProducts = new Promise((resolve) => {
      resolve(category ? fraccionProd : products);
    });
    getProducts.then((res) => {
      setMyProducts(res);
    });
    // misProductos
    //   .then((data) => {
    //     setMyProducts(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // // .finally(() => {
    // //   console.log("Se ejecuta siempre!");
    // // });
  }, [category]);

  // const productoMap = myProducts.map((prod) => prod.category);
  // console.log(productoMap);

  return (
    <div className="mainProduct">
      <ItemList myProducts={myProducts} />
    </div>
  );
};

//CON RETURN
//   return (
//     <div className="mainProduct">
//       {myProducts.map((prod) => {
//         return (
//           <Card
//             key={prod.id}
//             imageUrl={prod.imageUrl}
//             title={prod.title}
//             price={prod.price}
//             category={prod.category}
//           />
//         );
//       })}
//     </div>
//   );
// };
