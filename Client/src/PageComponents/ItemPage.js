import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../SubComponents/ItemPage/Main";  // Check the import
import Grid from "../SubComponents/ItemPage/Grid";  // Check the import
import { DataContext } from "../Context/DataContext";

const ItemPage = () => {
  const [data, setData] = useContext(DataContext);
  const params = useParams();
  const itemData = data?.find((d) => d._id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemData]);

  return (
    <div>
    <div>
    {itemData ? <Main data={itemData} /> : <p>Loading...</p>}
    {data && <Grid data={data} filter={itemData?.category} />}
  </div>
    </div>
  );
};

export default ItemPage;
