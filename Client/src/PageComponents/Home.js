import React, { useEffect, useState } from "react";
import Women from "../SubComponents/Home/Women";
import Men from "../SubComponents/Home/Men";
import Kids from "../SubComponents/Home/Kids";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
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
      {/* <Carousel activeIndex={props.index} onSelect={handleSelect}>
        <Carousel.Item>
          <Link to="/women">
            <Women data={data} />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/men">
            <Men data={data} />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/kids">
            <Kids data={data} />
          </Link>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default Home;
