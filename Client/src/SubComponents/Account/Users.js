import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";

const Users = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getData() {
      const users = await axios.get(process.env.REACT_APP_PATH + "user/users");
      setUsers(users.data);
    }
    getData();
  }, []);

  const handleType = async (e, id, email) => {
    const response = await axios.put(
      process.env.REACT_APP_PATH + `user/update/${id}`,
      { type: e.target.value }
    );
    toast(response.data.message);
    if (response.data.alert) {
      if (userData.email === email) {
        setUserData({
          ...userData,
          type: e.target.value,
        });
        localStorage.setItem(
          "User",
          JSON.stringify({
            ...userData,
            type: e.target.value,
          })
        );
      }
    }
  };
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold">All Users</h1>
      <table className="w-full my-6 border-2 border-black text-center">
        <tr className="bg-black text-white">
          <th className="p-2.5 border-x border-white">Name</th>
          <th className="p-2.5 border-x border-white">Email</th>
          <th className="p-2.5 border-x border-white">Number</th>
          <th className="p-2.5 border-x border-white">Address</th>
          <th className="p-2.5 border-x border-white">Type</th>
        </tr>
        {users.map((d, i) => (
          <tr key={i} className="border border-black p-2.5">
            <td className="p-2.5">
              {d.fname} {d.lname}
            </td>
            <td className="p-2.5 border-x border-black">{d.email}</td>
            <td className="p-2.5 border-x border-black">{d.no}</td>
            <td className="p-2.5 border-x border-black">{d.address}</td>
            <td className="p-2.5 border-x border-black">
              <select
                name=""
                id=""
                className="cursor-pointer font-bold outline-none text-center"
                onChange={(e) => handleType(e, d._id, d.email)}
              >
                <option disabled selected>
                  {d.type[0].toUpperCase() + d.type.slice(1)}
                </option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
                <option value="user">User</option>
              </select>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
