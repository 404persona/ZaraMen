import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getData() {
      window.scrollTo(0, 0);
      const orders = await axios.get(
        process.env.REACT_APP_PATH + "order/orders"
      );
      setOrders(orders.data);
    }
    getData();
  }, []);

  const handleStatus = async (e, id) => {
    const response = await axios.put(
      process.env.REACT_APP_PATH + `order/update/${id}`,
      { status: e.target.value }
    );
    toast(response.data.message);
  };

  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold">All Orders</h1>
      <table className="w-full my-6 border-2 border-black text-center">
        <tr className="bg-black text-white">
          <th className="p-2.5 border-x border-white">Customer Name</th>
          <th className="p-2.5 border-x border-white">Phone Number</th>
          <th className="p-2.5 border-x border-white">Address</th>
          <th className="p-2.5 border-x border-white">Order</th>
          <th className="p-2.5 border-x border-white">Total</th>
          <th className="p-2.5 border-x border-white">Status</th>
        </tr>
        {orders.map((d, i) => (
          <tr key={i} className="border border-black p-2.5">
            <td className="p-2.5 border-x border-black">
              {d.fname} {d.lname}
            </td>
            <td className="p-2.5 border-x border-black">{d.no}</td>
            <td className="p-2.5 border-x border-black">{d.address}</td>
            <td className="p-2.5 border-x border-black text-sm">
              {d.order.map((o, i) => (
                <div key={i} className="relative">
                  <p>
                    {o.name} ({o.qty}) (€ {o.tprice})
                  </p>
                </div>
              ))}
            </td>
            <td className="p-2.5 border-x border-black">EUR {d.price}</td>
            <td className="p-2.5 border-x border-black">
              <select
                name=""
                id=""
                className="cursor-pointer font-bold outline-none text-center"
                onChange={(e) => handleStatus(e, d._id)}
              >
                <option disabled selected>
                  {d.status[0].toUpperCase() + d.status.slice(1)}
                </option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Orders;
