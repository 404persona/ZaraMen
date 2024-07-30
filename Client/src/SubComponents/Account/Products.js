import React, { useContext, useEffect, useState } from "react";
import DItem from "./DItem";
import { DataContext } from "../../Context/DataContext";
const Products = () => {
  const [filter, setFilter] = useState("women");
  const [data, setData] = useContext(DataContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-6 lg:p-10">
      <h1 className="text-center text-3xl font-bold">All Products</h1>

      <div className="my-6 flex w-full justify-center text-xs">
        <span>
          <input
            type="radio"
            name="category"
            id="women"
            className="hidden peer"
            defaultChecked
          />
          <label
            htmlFor="women"
            className="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            onClick={() => {
              setFilter("women");
            }}
          >
            WOMEN
          </label>
        </span>
        <span className="mx-4">
          <input
            type="radio"
            name="category"
            id="man"
            className="hidden peer"
          />
          <label
            htmlFor="man"
            className="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            onClick={() => {
              setFilter("men");
            }}
          >
            MAN
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="category"
            id="kids"
            className="hidden peer"
          />
          <label
            htmlFor="kids"
            className="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            onClick={() => {
              setFilter("kids");
            }}
          >
            KIDS
          </label>
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full">
        {data
          ?.filter((d) => {
            return d.category === filter;
          })
          .map((d, i) => (
            <DItem
              key={i}
              id={d._id}
              img={process.env.REACT_APP_PATH + d.imgs[3]}
              img2={process.env.REACT_APP_PATH + d.imgs[0]}
              img3={process.env.REACT_APP_PATH + d.imgs[1]}
              img4={process.env.REACT_APP_PATH + d.imgs[2]}
              name={d.name}
              price={d.price}
              description={d.description}
              stock={d.stock}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
