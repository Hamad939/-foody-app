import React, { useState } from "react";
import { useContext } from "react";
import { loginData } from "./authLogin";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useContext(loginData);
  function formHandler(e) {
    e.preventDefault();
    setUserName(name);
    localStorage.setItem("Name", name);
    setName("");
    setPassword("");
    navigate("/");
  }
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="flex items-center w-full min-h-screen ">
        <div className="login w-full  sm:basis-1/2 flex justify-center items-center ">
          <div className="form  w-[75%]  sm:w-1/2  sm:h-1/3  ">
            <form
              action=""
              method="get"
              className="flex  flex-col  gap-2.5"
              onSubmit={(e) => {
                formHandler(e);
              }}
            >
              <h1 className="text-3xl text-center mb-1.5 font-bold font-sans">
                Login
              </h1>
              <input
                type="text"
                placeholder="Enter Your Username"
                className="px-2 py-3 border rounded-xl outline-0"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="px-3 py-3 border rounded-xl outline-0 "
                required
                value={password}
                minLength={6}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="px-3 py-3   bg-amber-300 font-medium hover:bg-amber-200 ease-in-out  border rounded-xl">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="hidden sm:block  sm:basis-1/2 sm:h-screen  ">
          <img
            className="sm:w-full sm:object-cover sm:h-full"
            src="https://cheezious.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FdeliveryMan.d3a61025.jpg&w=1920&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
