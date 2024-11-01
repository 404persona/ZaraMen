import React from "react";

const subNav = () => {
  const NavData = [
    {
      label: "Stitched",
      href: "/stiched",
      subLinks: [],
    },
    {
      label: "Unstitched",
      href: "/unstitched",
      subLinks: [],
    },
  ];
  return (
    <div>
      {NavData.map((item, index) => (
        <div>
          <ul>
            <li className="text-[2rem]" >{item.label}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default subNav;
