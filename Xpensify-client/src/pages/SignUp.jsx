import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const AUTH_URL = import.meta.env.VITE_AUTH_URL;

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    const username = data.get("username");

    const response = await fetch(`http://44.201.144.42:8082/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (response.ok) {
      navigate("/sign-in");
    } else {
      console.error("Sign-up failed");
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <div class="h-screen bg-white flex flex-col justify-center    ">
        <img
          src="./src/assets/logo.png"
          className="absolute top-0 left-0 ml-4 h-40 w-auto"
        />
        <div className=" mt-8 sm:mx-auto  sm:w-full  sm:max-w-sm">
          <h2 className="  text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Join Xpensify Today!
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600 max-w">
            <a
              onClick={() => navigate("/sign-in")}
              className="cursor-pointer font-medium text-blue-600 hover:text-blue-500"
            >
              Have an account? Sign in
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              action="signup"
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    username
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Enter your username"
                    id="username"
                    name="username"
                    type="username"
                    required
                    autoComplete="email"
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
                    placeholder="Enter your password"
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
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already have an account?{" "}
              <a
                href=""
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                onClick={() => navigate("/sign-in")}
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
