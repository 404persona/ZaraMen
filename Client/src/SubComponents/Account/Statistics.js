import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import axios from "axios";
const Statistics = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    async function getData() {
      const users = await axios.get(process.env.REACT_APP_PATH + "user/users");
      setUsers(users.data);
      const orders = await axios.get(
        process.env.REACT_APP_PATH + "order/orders"
      );
      setOrders(orders.data);
    }
    getData();
  }, []);

  return (
    <div className="p-6 lg:p-10">
      <div className="w-full flex justify-around mb-5 flex-wrap gap-2">
        <div className="shrink-0 hadow w-[48%] sm:w-[30%] border  py-3.5 md:py-6 text-center bg-black rounded-3xl text-white text-xl">
          <p className="font-bold">Orders</p>
          <p className="font-bold">{orders?.length}</p>
        </div>
        <div className="shrink-0 shadow w-[48%] sm:w-[30%] border py-3.5 md:py-6 text-center bg-[#808080] rounded-3xl text-white text-xl">
          <p className="font-bold">Users</p>
          <p className="font-bold">{users?.length}</p>
        </div>
        <div className="shrink-0 shadow w-[48%] sm:w-[30%] border  py-3.5 md:py-6 text-center bg-[#b6b6b6] rounded-3xl text-white text-xl">
          <p className="font-bold">Products</p>
          <p className="font-bold">{data?.length}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <embed
          className="bg-white border-none rounded shadow w-full sm:w-2/3 h-[50vh] sm:mr-3.5 lg:mr-10"
          src="https://charts.mongodb.com/charts-zara-qkvgo/embed/charts?id=6464d9c6-89ec-4a1c-86da-121da0890e76&maxDataAge=60&theme=light&autoRefresh=true"
        />
        <embed
          className="bg-white border-none rounded shadow w-full sm:w-1/3 h-[50vh] mt-10 sm:my-0"
          src="https://charts.mongodb.com/charts-zara-qkvgo/embed/charts?id=6463f143-7909-4db9-815d-7f6ba87891c6&maxDataAge=300&theme=light&autoRefresh=true"
        />
      </div>
    </div>
  );
};

export default Statistics;
