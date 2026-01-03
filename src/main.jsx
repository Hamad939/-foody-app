import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthLogin from "./components/authLogin.jsx";
import CartContextProvider from "./components/cartContext.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthLogin>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthLogin>
    </BrowserRouter>
  </StrictMode>
);
