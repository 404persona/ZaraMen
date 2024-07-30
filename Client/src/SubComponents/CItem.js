import React from "react";
import { Link, useLocation } from "react-router-dom";

function CItem(props) {
  return (
    <Link className="mb-10 text-black" to={`/product/${props.id}`}>
      <div>
        {props.img && <img src={props.img} alt="" className="w-full" />}
      </div>
      <div className="w-full flex justify-between font-light text-[10px] py-1">
        <span className="w-1/2 truncate">{props.name}</span>
        <span>{props.price} EUR</span>
      </div>
    </Link>
  );
}

export default CItem;
