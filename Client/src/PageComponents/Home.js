import React, { useEffect, useState } from "react";
// import Women from "../SubComponents/Home/Women";
import Men from "../SubComponents/Home/Men";
import Kids from "../SubComponents/Home/Kids";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
import AutoProgressCarousel from "./AutoProgressCarousel";
// import Women from "./HomeComponents/Women";
import TrendingOutfits from "./HomeComponents/TrendingOutfits";
const Home = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        process.env.REACT_APP_PATH + "home/imgs"
      );
      setData(response.data);
    }
    getData();
  }, []);

  const handleSelect = (selectedIndex) => {
    props.getIndex(selectedIndex);
  };

  return (
    <div>
     <AutoProgressCarousel/>
<TrendingOutfits data={data} />
    </div>
  );
};

export default Home;
