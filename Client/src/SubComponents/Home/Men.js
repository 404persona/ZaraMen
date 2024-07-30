import React from "react";

const Men = ({ data }) => {
  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-scroll relative scrollbar-none text-black">
      {data
        .filter((d) => {
          return d.category === "men";
        })
        .slice(0, 1)
        .map((d, i) => (
          <div
            className="h-full w-full snap-always snap-start sticky top-0"
            key={i}
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
            <p className="w-full text-end absolute z-40 p-10 bottom-0 font-bold text-sm">
              {d.name}
            </p>
          </div>
        ))}
      {data
        .filter((d) => {
          return d.category === "men";
        })
        .slice(1, 2)
        .map((d, i) => (
          <div
            className="h-full w-full snap-always snap-start sticky top-0"
            key={i}
          >
            <video
              autoPlay
              loop
              muted
              src={process.env.REACT_APP_PATH + d.imgs[0]}
              className="md:hidden h-full w-full object-cover"
            />
            <video
              autoPlay
              loop
              muted
              src={process.env.REACT_APP_PATH + d.imgs[1]}
              className="hidden md:block h-full w-full object-cover"
            />
            <p className="w-full text-end absolute z-40 bottom-0 font-bold text-sm p-10">
              {d.name}
            </p>
          </div>
        ))}
      {data
        .filter((d) => {
          return d.category === "men";
        })
        .slice(2)
        .map((d, i) => (
          <div
            className="h-full w-full snap-always snap-start sticky top-0"
            key={i}
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

export default Men;
