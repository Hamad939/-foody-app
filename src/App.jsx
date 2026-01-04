import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/heroo";
import Error from "./components/error";
import Body from "./components/body";
import Footer from "./components/footer";
import Login from "./components/login";
import AddToCart from "./components/addToCart";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname == "/login";
  const showError = location.pathname == "*";
  return (
    <div className=" min-h-screen flex flex-col">
      {!hideNavFooter || (!showError && <Navbar />)}
      <div className="main flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Hero />
                <Body />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addToCart" element={<AddToCart />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
      {!hideNavFooter || (!showError && <Footer />)}
    </div>
  );
}

export default App;
