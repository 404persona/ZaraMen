import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext("");

const DataState = (props) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        process.env.REACT_APP_PATH + "product/products"
      );
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <DataContext.Provider value={[Data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataState };
