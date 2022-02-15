import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../firebase-config";

const Signup = () => {
  const history = useHistory();

  // eslint-disable-next-line
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // eslint-disable-next-line
  const [registerName, setRegisterName] = useState("");
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
    <div className="'h-screen flex bg-gray-bg1'">
      <div className="w-full max-w-md m-auto bg-blue-100 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <p className="py-2">Create Your Account</p>
        <div>
          <input
            type="text"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            placeholder="Full Name"
            onChange={(event) => {
              setRegisterName(event.target.value);
            }}
          />
          <input
            type="email"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            placeholder="Email Address"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type="password"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            placeholder="Your Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
              onClick={register}
            >
              Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
