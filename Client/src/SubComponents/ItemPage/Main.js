import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Main({ data }) {
  const [btns, setBtns] = useState(0);
  const [scrollbar, setScrollbar] = useState(0);
  const [small, setSmall] = useState("");
  const [medium, setMedium] = useState("");
  const [large, setLarge] = useState("");
  const [xlarge, setXlarge] = useState("");
  const [size, setSize] = useState("");
  const [userData, setUserData] = useContext(UserContext);
  const [cartData, setCartData] = useContext(CartContext);
  const navigate = useNavigate();
  let i = 0;
  const scroll = useRef();

  useEffect(() => {
    scroll.current.scrollTop = 0;
    setScrollbar(
      Math.round(
        (scroll.current.clientHeight / scroll.current.scrollHeight) * 100
      )
    );
  }, [data]);

  const handleAddToBag = () => {
    if (userData) {
      if (size) {
        const itemId = cartData.map((d) => {
          return d.item;
        });
        if (itemId.includes(size + data._id)) {
          const index = cartData.findIndex(
            (item) => item.item === size + data._id
          );
          cartData[index] = {
            ...cartData[index],
            tprice: cartData[index].tprice + data.price,
            qty: cartData[index].qty + 1,
          };
          setCartData([...cartData]);
          localStorage.setItem("cart", JSON.stringify([...cartData]));
        } else {
          setCartData([
            ...cartData,
            {
              name: data.name,
              img: data.imgs[3],
              price: data.price,
              size: size,
              qty: 1,
              tprice: data.price,
              id: data._id,
              item: size + data._id,
            },
          ]);
          localStorage.setItem(
            "cart",
            JSON.stringify([
              ...cartData,
              {
                name: data.name,
                img: data.imgs[3],
                price: data.price,
                size: size,
                qty: 1,
                tprice: data.price,
                id: data._id,
                item: size + data._id,
              },
            ])
          );
        }
        toast("Product added to cart");
      } else {
        toast("You must select a size");
      }
    } else {
      navigate("/login");
      toast("You must login first");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-between items-end md:pt-36 md:px-12">
      <div className="flex flex-col justify-end w-2/12 font-light hidden lg:block">
        <p className="text-xs my-4">COMPOSITION & CARE</p>
        <p className="text-xs my-3">COMPOSITION</p>
        <p className="text-[13px] leading-5 w-11/12">
          We work with monitoring programmes to ensure compliance with our
          social, environmental and health and safety standards for our
          garments.
        </p>
        <p className="my-4 text-[13px] leading-5 w-11/12">
          To assess compliance, we have developed a programme of audits and
          continuous improvement plans.
        </p>
        <p href="#" className="text-black text-[11px] underline">
          View more
        </p>
      </div>
      <div
        className="lg:ml-36 md:mr-5 w-full md:w-2/4 lg:w-2/5 h-[80vh] md:h-[75vh] relative"
        onMouseEnter={() => setBtns(100)}
        onMouseLeave={() => setBtns(0)}
      >
        <div
          ref={scroll}
          className="snap-y snap-mandatory h-full w-full md:w-10/12 overflow-scroll scrollbar-none scroll-smooth"
          onScroll={() => {
            setScrollbar(
              Math.round(
                ((scroll.current.clientHeight + scroll.current.scrollTop) /
                  scroll.current.scrollHeight) *
                  100
              )
            );
          }}
        >
          {data?.imgs.map((img, i) => (
            <img
              src={process.env.REACT_APP_PATH + img}
              alt=""
              className="snap-always snap-start w-full h-full"
              key={i}
            />
          ))}
        </div>
        <div className="hidden md:block absolute w-[1.5px] h-full top-0 right-[10%]">
          <div className="w-full bg-gray-300 h-full absolute"></div>
          <div
            className={`w-full bg-black h-full absolute origin-top scale-y-[${scrollbar}%]`}
          />
        </div>
        <div
          className={
            "hidden md:block absolute transition duration-500 top-0 right-0 w-[7%] opacity-" +
            btns
          }
        >
          {data?.imgs.map((img, i) => (
            <img
              src={process.env.REACT_APP_PATH + img}
              alt=""
              key={i}
              className="cursor-pointer w-full mb-1"
              onClick={() => {
                scroll.current.scrollTop = scroll.current.clientHeight * i;
              }}
            />
          ))}
        </div>
      </div>
      <div className="px-3.5 w-full md:w-5/12 lg:w-4/12 text-[11px]">
        <div className="w-full h-0.5 flex justify-center md:hidden my-3.5 mb-8">
          <div className="bg-black w-1/12"></div>
        </div>
        <p className="my-1 text-xs md:text-[16px] font-light leading-6">
          {data?.name}
        </p>
        <p className="font-bold text-xs md:text-sm">{data?.price} EUR</p>
        <p className="text-[13px] font-light md:w-10/12 my-4">
          {data?.description}
        </p>
        <div className="border-y border-black flex flex-col items-start md:w-10/12">
          <p
            className={
              "flex flex-col items-center md:items-start m-0 text-xs hover:bg-gray-200 w-full font-light " +
              small
            }
          >
            <input
              type="radio"
              id="small"
              name="size"
              className="peer hidden"
              value="SMALL"
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              htmlFor="small"
              className="peer-checked:font-bold cursor-pointer md:w-full block py-1.5"
              onClick={() => {
                if (i === 0) {
                  setMedium("hidden");
                  setLarge("hidden");
                  setXlarge("hidden");
                  i = 1;
                } else {
                  setSmall("");
                  setMedium("");
                  setLarge("");
                  setXlarge("");
                  i = 0;
                }
              }}
            >
              EU S / US S
            </label>
          </p>
          <p
            className={
              "flex flex-col items-center md:items-start m-0 text-xs hover:bg-gray-200 w-full font-light " +
              medium
            }
          >
            <input
              type="radio"
              id="medium"
              name="size"
              className="peer hidden"
              value="MEDIUM"
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              htmlFor="medium"
              className="peer-checked:font-bold cursor-pointer md:w-full block py-1.5"
              onClick={() => {
                if (i === 0) {
                  setSmall("hidden");
                  setLarge("hidden");
                  setXlarge("hidden");
                  i = 1;
                } else {
                  setSmall("");
                  setMedium("");
                  setLarge("");
                  setXlarge("");
                  i = 0;
                }
              }}
            >
              EU M / US M
            </label>
          </p>

          <p
            className={
              "flex flex-col items-center md:items-start m-0 text-xs hover:bg-gray-200 w-full font-light " +
              large
            }
          >
            <input
              type="radio"
              id="large"
              name="size"
              className="peer hidden"
              value="LARGE"
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              htmlFor="large"
              className="peer-checked:font-bold cursor-pointer md:w-full block py-1.5"
              onClick={() => {
                if (i === 0) {
                  setSmall("hidden");
                  setMedium("hidden");
                  setXlarge("hidden");
                  i = 1;
                } else {
                  setSmall("");
                  setMedium("");
                  setLarge("");
                  setXlarge("");
                  i = 0;
                }
              }}
            >
              EU L / US L
            </label>
          </p>
          <p
            className={
              "flex flex-col items-center md:items-start m-0 text-xs hover:bg-gray-200 w-full font-light " +
              xlarge
            }
          >
            <input
              type="radio"
              id="xlarge"
              name="size"
              className="peer hidden"
              value="XLARGE"
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              htmlFor="xlarge"
              className="peer-checked:font-bold cursor-pointer md:w-full block py-1.5"
              onClick={() => {
                if (i === 0) {
                  setSmall("hidden");
                  setMedium("hidden");
                  setLarge("hidden");
                  setXlarge("");
                  i = 1;
                } else {
                  setSmall("");
                  setMedium("");
                  setLarge("");
                  setXlarge("");
                  i = 0;
                }
              }}
            >
              EU XL / US XL
            </label>
          </p>
        </div>
        <p className="my-2 text-xs font-light">SIZE GUIDE</p>
        {data.stock > 0 ? (
          <button
            className="border-y border-x border-black  my-3 py-2 px-16 text-xs hover:border-gray-300"
            onClick={handleAddToBag}
          >
            ADD TO BAG
          </button>
        ) : (
          <button className="border-y border-x my-3 py-2 px-16 text-xs text-gray-400 border-gray-400">
            OUT OF STOCK
          </button>
        )}
        <p>SHIPPING AND RETURNS</p>
      </div>
    </div>
  );
}

export default Main;
