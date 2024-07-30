import React from "react";

const Women = ({ data }) => {
  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-scroll relative scrollbar-none text-black">
      {data
        .filter((d) => {
          return d.category === "women";
        })
        .map((d, i) => (
          <div
            key={i}
            className="h-full w-full snap-always snap-start sticky top-0"
          >
            <img
              src={process.env.REACT_APP_PATH + d.imgs[1]}
              className="sm:hidden h-full w-full"
            />
            <img
              src={process.env.REACT_APP_PATH + d.imgs[0]}
              className="hidden sm:block md:hidden h-full w-full"
            />
            <img
              src={process.env.REACT_APP_PATH + d.imgs[2]}
              className="hidden md:block h-full w-full"
            />
            <p className="w-full text-end absolute z-40 bottom-0 font-bold text-sm p-10">
              {d.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Women;
