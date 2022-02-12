import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase-config";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
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
  return (
    <div>
      Signup
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Passsword..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={register}
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
