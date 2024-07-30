import React from "react";
import Item from "../Item";
function Grid({ input, data }) {
  return (
    <div className="">
      <div className="px-6">
        {!input ? (
          <p className="mt-10 mb-4 font-bold text-xs">
            YOU MIGHT BE INTERESTED IN
          </p>
        ) : (
          <p className="mt-4 mb-4 text-sm">
            {
              data.filter((item) => {
                if (!input) {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(input.toLowerCase())
                ) {
                  return item;
                }
              }).length
            }{" "}
            RESULTS
          </p>
        )}
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-6 gap-3">
        {data
          .filter((item) => {
            if (!input) {
              return item;
            } else if (item.name.toLowerCase().includes(input.toLowerCase())) {
              return item;
            }
          })
          .map((d, i) => (
            <Item
              key={i}
              id={d._id}
              img={process.env.REACT_APP_PATH + d.imgs[3]}
              img2={process.env.REACT_APP_PATH + d.imgs[0]}
              img3={process.env.REACT_APP_PATH + d.imgs[1]}
              img4={process.env.REACT_APP_PATH + d.imgs[2]}
              name={d.name}
              price={d.price}
              description={d.description}
            />
          ))}
      </div>
    </div>
  );
}

export default Grid;
