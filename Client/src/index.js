import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserState } from "./Context/UserContext";
import { CartState } from "./Context/CartContext";
import { DataState } from "./Context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataState>
    <UserState>
      <CartState>
        <App />
      </CartState>
    </UserState>
  </DataState>
);
