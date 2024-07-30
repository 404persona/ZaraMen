import React from "react";
import CItem from "../CItem";

function Grid({ data, filter }) {
  return (
    <div className="py-32 bg-white">
      <p className="my-4 text-sm font-light px-4">YOU MAY ALSO LIKE</p>
      <div className="grid grid-cols-2 md:grid-cols-6 px-4 md:px-0">
        {data
          ?.filter((d) => {
            return d.category === filter;
          })
          .map((d, i) => (
            <div className="border-black border-[.7px] p-[3px] ">
              <CItem
              key={i}
              id={d._id}
              img={process.env.REACT_APP_PATH + d.imgs[2]}
              name={d.name}
              price={d.price}
              description={d.description}
            />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Grid;
