import React from "react";

import { useState } from "react";
export default function AdminLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function adminLoginFunction() {
    console.log("admin login function" , email , password);
  }
  return (
    <div id="adminLogin">
      <div id="inputsDiv">
        <div>
          <input
            type="email"
            name="email"
            id="adminEmail"
            placeholder="admin email"
            onChange={(e)=> { setemail(e.target.value)}}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="adminPassword"
            placeholder="admin password"
            onChange={(e)=> { setpassword(e.target.value)}}
          />
        </div>
      </div>
      <div id="buttonDiv">
        <button
          id="adminLoginButton"
          onClick={() => {
            if (email!=null && email!=""&&  password!=null && password!="") {
                adminLoginFunction();
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
