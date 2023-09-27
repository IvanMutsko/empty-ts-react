import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { User } from "./App/App.types";

const user: User = {
  id: 1,
  name: "Jon",
  email: "mail@example.com",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>
);
