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
    <div>
      <div>
        <h3>Login</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Passsword..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
