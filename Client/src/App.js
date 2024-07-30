import React, { useContext, useEffect, useState } from "react";
import Nav from "./SubComponents/Nav";
import Footer from "./SubComponents/Footer";
import Home from "./PageComponents/Home";
import ProductsPage from "./PageComponents/ProductsPage";
import ItemPage from "./PageComponents/ItemPage";
import Search from "./PageComponents/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import View from "./SubComponents/ProductsPage/View";
import Collection from "./SubComponents/ProductsPage/Collection";
import Grid from "./SubComponents/Search/Grid";
import Cart from "./PageComponents/Cart";
import Login from "./PageComponents/Login";
import Signup from "./PageComponents/Signup";
import AccountPage from "./PageComponents/Account";
import { Toaster } from "react-hot-toast";
import Account from "./SubComponents/Account/Account";
import Dashboard from "./SubComponents/Account/Dashboard";
import Statistics from "./SubComponents/Account/Statistics";
import Products from "./SubComponents/Account/Products";
import Users from "./SubComponents/Account/Users";
import Orders from "./SubComponents/Account/Orders";
import Checkout from "./PageComponents/Checkout";
import ErrorPage from "./PageComponents/ErrorPage";
import { UserContext } from "./Context/UserContext";
import { CartContext } from "./Context/CartContext";
import { DataContext } from "./Context/DataContext";
import AddProduct from "./SubComponents/Account/AddProduct";
import UpdateProduct from "./SubComponents/Account/UpdateProduct";
import jwt_decode from "jwt-decode";
const App = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useContext(DataContext);
  const [collection, setCollection] = useState([]);
  const [input, setInput] = useState("");
  const [userData, setUserData] = useContext(UserContext);
  const [cartData, setCartData] = useContext(CartContext);
  useEffect(() => {
    const getData = async () => {
      const cresponse = await axios.get(
        process.env.REACT_APP_PATH + "collection/collection"
      );
      setCollection(cresponse.data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (userData) {
      let decoded = jwt_decode(userData.token);
      if (decoded.exp * 1000 < Date.now()) {
        setUserData("");
        setCartData([]);
        localStorage.removeItem("User");
        localStorage.removeItem("cart");
      }
    }
  }, [userData]);

  const handleIndex = (data) => {
    setIndex(data);
  };
  const handleInput = (data) => {
    setInput(data);
  };
  return (
    <div>
      <Router>
        <Nav getIndex={handleIndex} index={index} />
        <Routes>
          <Route
            path="/"
            element={<Home index={index} getIndex={handleIndex} />}
          />
          <Route path="/men" element={<ProductsPage />}>
            <Route path="view" element={<View filter="men" />} />
            <Route
              path=""
              element={<Collection data={collection} filter="men" />}
            />
          </Route>
          <Route path="/women" element={<ProductsPage />}>
            <Route path="view" element={<View filter="women" />} />
            <Route
              path=""
              element={<Collection data={collection} filter="women" />}
            />
          </Route>
          <Route path="/kids" element={<ProductsPage />}>
            <Route path="view" element={<View filter="kids" />} />
            <Route
              path=""
              element={<Collection data={collection} filter="kids" />}
            />
          </Route>
          <Route path="/product/:id" element={<ItemPage />} />
          <Route
            path="/search"
            element={<Search input={input} getInput={handleInput} />}
          >
            <Route
              path=""
              element={
                <Grid
                  input={input}
                  data={data.filter((d) => {
                    return d.category === "women";
                  })}
                />
              }
            />
            <Route
              path="men"
              element={
                <Grid
                  input={input}
                  data={data.filter((d) => {
                    return d.category === "men";
                  })}
                />
              }
            />
            <Route
              path="kids"
              element={
                <Grid
                  input={input}
                  data={data.filter((d) => {
                    return d.category === "kids";
                  })}
                />
              }
            />
          </Route>
          <Route path="/cart" element={<Cart />} />
          {userData && cartData.length > 0 && (
            <Route path="/checkout" element={<Checkout />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {userData && (
            <Route path="/account" element={<AccountPage />}>
              <Route path="" element={<Account />} />
              {userData?.type === "admin" || userData?.type === "moderator" ? (
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="" element={<Statistics />} />
                  {userData?.type === "admin" && (
                    <Route path="users" element={<Users />} />
                  )}
                  {userData?.type === "admin" && (
                    <Route path="products" element={<Products />} />
                  )}
                  <Route path="orders" element={<Orders />} />
                  {userData?.type === "admin" && (
                    <Route path="addproduct" element={<AddProduct />} />
                  )}
                  {userData?.type === "admin" && (
                    <Route
                      path="updateproduct/:id"
                      element={<UpdateProduct />}
                    />
                  )}
                </Route>
              ) : null}
            </Route>
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
