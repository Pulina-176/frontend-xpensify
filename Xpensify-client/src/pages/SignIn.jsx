import React from "react";
import { useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {

  const AUTH_URL = import.meta.env.VITE_AUTH_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.user);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");
    console.log("this is the new one")
    try {
      dispatch(signInStart());
      const response = await fetch(`http://3.94.125.173/:8082/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
      const result = await response.json();
      if (response.ok) {
        console.log(result.user);
        console.log(result.token);
        dispatch(signInSuccess(result.user));
        localStorage.setItem("token", result.token);
        navigate("/home");
      } else {
        dispatch(signInFailure(result.message));
        console.error("Sign-in failed");
      }
    } catch (error) {
      console.error("Sign-in failed", error);
    }
  };
  return (
    <>
      <div className="h-screen bg-white flex flex-col justify-center">
        <img
          src="./src/assets/logo.png"
          className="absolute top-0 left-0 ml-4 h-40 w-auto"
        />
        <div className=" mt-8 sm:mx-auto  sm:w-full  sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign In to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              action="#"
              method="POST"
              className="space-y-4 sm:space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Username
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    required
                    // autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              New here?{" "}
              <a
                href=""
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                onClick={() => navigate("/sign-up")}
              >
                Sign up today!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
