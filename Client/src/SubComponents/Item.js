import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Link to={`/product/${props.id}`} className="text-black">
      <div className="relative">
        <div
          id="imgs"
          className="w-full flex overflow-scroll snap-x snap-mandatory scrollbar-none"
        >
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
        <span className="absolute bg-white/50 py-1 px-2.5 rounded-full top-3/4 left-1/2 -translate-x-1/2">
          +
        </span>
      </div>

      <p className=" text-[10px] md:text-[10px] lg:text-xs my-1 font-light truncate">
        {props.name}
      </p>
      <p className="text-[10px] md:text-[9px]  lg:text-xs my-1 font-light">
        {props.price} EUR
      </p>
    </Link>
  );
}

export default Item;
