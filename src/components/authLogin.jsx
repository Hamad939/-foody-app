import React, { useState } from "react";
import { createContext } from "react";

export const loginData = createContext();

const AuthLogin = (props) => {
  const [Username, setUsername] = useState(() => {
    return localStorage.getItem("Name") || "";
  });
  return (
    <div>
      <loginData.Provider value={[Username, setUsername]}>
        {props.children}
      </loginData.Provider>
    </div>
  );
};

export default AuthLogin;
