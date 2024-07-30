import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { DataContext } from "../../Context/DataContext";
import { toast } from "react-hot-toast";
const CartItem = (props) => {
  const [cartData, setCartData] = useContext(CartContext);
  const [data, setData] = useContext(DataContext);
  const index = data.findIndex((d) => d._id === props.id);
  const stock = data[index].stock;
  const handleDelete = (item) => {
    let itemId = cartData.findIndex((d) => d.item === item);
    cartData.splice(itemId, 1);
    setCartData([...cartData]);
    localStorage.setItem("cart", JSON.stringify([...cartData]));
  };

  const handleIncrement = (item) => {
    if (props.qty >= stock) {
      toast("No more items in stock");
    } else {
      let itemId = cartData.findIndex((d) => d.item === item);
      console.log();
      cartData[itemId] = {
        ...cartData[itemId],
        tprice: props.tprice + props.price,
        qty: props.qty + 1,
      };

      setCartData([...cartData]);
      localStorage.setItem("cart", JSON.stringify([...cartData]));
    }
  };
  const handleDecrement = (item) => {
    if (props.qty > 1) {
      let itemId = cartData.findIndex((d) => d.item === item);
      cartData[itemId] = {
        ...cartData[itemId],
        tprice: props.tprice - props.price,
        qty: props.qty - 1,
      };
      setCartData([...cartData]);
      localStorage.setItem("cart", JSON.stringify([...cartData]));
    }
  };

  return (
    <div className="text-[10px] md:text-xs font-light">
      <Link to={`/product/${props.id}`} className="text-black">
        <div>
          {props.img && <img src={props.img} alt="" className="w-full" />}
        </div>
        <p className="my-1.5">{props.name}</p>
      </Link>
      <div className="flex w-full justify-between my-1.5">
        <span>{Math.round(props.tprice * 100) / 100} EUR</span>
        <span>{props.size}</span>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <button
            className="py-1 pr-2"
            onClick={() => handleDecrement(props.item)}
          >
            -
          </button>
          <span className="py-1 px-2">{props.qty}</span>
          <button
            className="py-1 pl-2"
            onClick={() => handleIncrement(props.item)}
          >
            +
          </button>
        </div>
        <button onClick={() => handleDelete(props.item)}>DELETE</button>
      </div>
    </div>
  );
};

export default CartItem;
