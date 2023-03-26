import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import client from "./apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
