import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase-config";

const Login = () => {
  const history = useHistory();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const token = user.user.accessToken;
      localStorage.setItem("token", token);
      history.push({
        pathname: "/dashboard",
        state: {
          user: user.user.email,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    history.push({
      pathname: "/",
    });
  };

  return (
    <div className="'h-screen flex bg-gray-bg1'">
      <div className="w-full max-w-md m-auto bg-blue-100 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <p className="py-2">Log into your account</p>
        <input
          type="email"
          className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
          placeholder="Email Address"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
