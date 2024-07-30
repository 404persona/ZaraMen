import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";

const AddProduct = () => {
  const [allData, setAllData] = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState({
    imgs: [],
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: files,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < data.imgs.length; i++) {
      formData.append("imgs", data.imgs[i]);
    }
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    const response = await axios.post(
      process.env.REACT_APP_PATH + "product/addProduct",
      formData
    );
    toast(response.data.message);
    const getData = await axios.get(
      process.env.REACT_APP_PATH + "product/products"
    );
    setAllData(getData.data);
    setData({
      imgs: [],
      name: "",
      price: "",
      description: "",
      category: "",
      stock: "",
    });
  };

  return (
    <div className="md:p-10">
      <form
        className="mx-auto md:w-2/3 lg:w-1/2 shadow  flex flex-col p-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl mb-6 font-bold">Add Product</h1>
        <label htmlFor="imgs" className="font-bold">
          Images :
        </label>
        <input
          type="file"
          accept="image/*"
          name="imgs"
          multiple
          id="imgs"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          onChange={handleImage}
        />
        <label htmlFor="name" className="font-bold mt-6">
          Name :
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          placeholder="Item Name"
          value={data.name}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <div className="w-[48%]">
            <label htmlFor="price" className="font-bold  mt-6">
              Price :
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
              placeholder="Item Price"
              value={data.price}
              onChange={handleChange}
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="price" className="font-bold mt-6">
              Stock :
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
              placeholder="Items in stock"
              value={data.stock}
              onChange={handleChange}
            />
          </div>
        </div>

        <label htmlFor="description" className="font-bold  mt-6">
          Description :
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          placeholder="Item Description"
          value={data.description}
          onChange={handleChange}
        />

        <label htmlFor="category" className="font-bold  mt-6">
          Category :
        </label>
        <select
          name="category"
          id="category"
          className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          value={data.category}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Select Category
          </option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
        <button className="text-sm text-center bg-black text-white mt-6  hover:border-gray-400 py-2.5 px-3.5">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
