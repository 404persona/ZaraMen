import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { DataContext } from "../../Context/DataContext";
const DItem = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [data, setData] = useContext(DataContext);

  const handleDelete = async (id) => {
    const response = await axios.delete(
      process.env.REACT_APP_PATH + `product/delete/${id}`
    );
    toast(response.data.message);
    const getData = await axios.get(
      process.env.REACT_APP_PATH + "product/products"
    );
    setData(getData.data);
  };

  return (
    <div className="text-[10px] sm:text-xs font-light">
      <Link to={`/product/${props.id}`} className="text-black">
        <div className="w-full flex overflow-scroll snap-x snap-mandatory scrollbar-none">
          {props.img && (
            <img
              src={props.img}
              alt=""
              className="w-full snap-start snap-always"
            />
          )}
          {props.img2 && (
            <img
              src={props.img2}
              alt=""
              className="w-full snap-start snap-always"
            />
          )}
          {props.img3 && (
            <img
              src={props.img3}
              alt=""
              className="w-full snap-start snap-always"
            />
          )}
          {props.img4 && (
            <img
              src={props.img4}
              alt=""
              className="w-full snap-start snap-always"
            />
          )}
        </div>
        <p className="my-1.5 truncate">{props.name}</p>
      </Link>
      <div className="flex justify-between w-full">
        <div className="my-1.5 ">{props.price} EUR</div>
        <label className="my-1.5">
          STOCK:
          <input
            type="number"
            className="outline-none w-8"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </label>
      </div>
      <div className=" mt-2.5 flex w-full justify-between items-center">
        <Link
          to={`../updateproduct/${props.id}`}
          className="text-center text-black bg-gray-900 text-white  hover:bg-gray-500 py-1.5 w-[40%] text-[10px] sm:text-xs"
        >
          UPDATE
        </Link>
        <button
          className="bg-gray-900 text-white hover:bg-gray-500 py-1.5 w-[40%] text-[10px] sm:text-xs"
          onClick={() => handleDelete(props.id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default DItem;
