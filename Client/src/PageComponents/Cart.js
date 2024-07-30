import React, { useContext, useEffect } from "react";
import CartItem from "../SubComponents/Cart/CartItem";
import { CartContext } from "../Context/CartContext";
import { DataContext } from "../Context/DataContext";
import CItem from "../SubComponents/CItem";
import WebAssetOffIcon from "@mui/icons-material/WebAssetOff";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cartData, setCartData] = useContext(CartContext);
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTotal = () => {
    let total = 0;
    cartData.map((item) => (total = total + item.tprice));
    return total;
  };

  return (
    <div className="pt-24 md:pt-36 w-full">
      {cartData.length > 0 ? (
        <div className="flex w-full flex-col md:flex-row">
          <div className="w-full md:w-2/3 px-6 md:h-screen mb-20 md:mb-0">
            <p className="mb-6 text-sm font-bold">CART</p>
            <div className="grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:h-full md:overflow-scroll md:scrollbar-none">
              {cartData.map((d, i) => (
                <CartItem
                  key={i}
                  img={process.env.REACT_APP_PATH + d.img}
                  name={d.name}
                  price={d.price}
                  tprice={d.tprice}
                  size={d.size}
                  qty={d.qty}
                  id={d.id}
                  item={d.item}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-6 md:px-10">
            <p className="mb-6 text-sm font-bold">YOU MAY ALSO LIKE</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3 md:h-screen md:overflow-y-scroll md:scrollbar-none">
              {data.map((d, i) => (
                <CItem
                  key={i}
                  img={process.env.REACT_APP_PATH + d.imgs[3]}
                  name={d.name}
                  price={d.price}
                  id={d._id}
                />
              ))}
            </div>
          </div>
          <div className="fixed bottom-0 w-full flex justify-end p-3.5 md:p-6 text-xs bg-white/95">
            <span className="font-bold">TOTAL</span>
            <span className="font-bold  mx-3.5 sm:mx-6 md:mx-10">
              {Math.round(handleTotal() * 100) / 100} EUR
            </span>
            <Link
              to="/checkout"
              className="w-1/3 text-center py-2.5 bg-black text-white"
            >
              CONTINUE
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full h-[50vh] flex flex-col justify-center items-center">
          <WebAssetOffIcon className="scale-[3]" />
          <p className=" my-10 font-light text-sm">
            YOUR SHOPPING BASKET IS EMPTY
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
