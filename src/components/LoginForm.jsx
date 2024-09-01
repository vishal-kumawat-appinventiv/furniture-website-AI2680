import React, { useState } from "react";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", loginInfo);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 border-2 border-gray-200 max-w-[550px] w-full">
        <h1 className="text-5xl font-bold mb-16">Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username or email*"
          className="border-2 border-gray-200 rounded p-2 w-full mb-6 outline-none"
          value={loginInfo.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password*"
          className="border-2 border-gray-200 rounded p-2 w-full mb-6 outline-none"
          value={loginInfo.password}
          onChange={handleChange}
        />
        <div className="flex items-center w-full mb-6">
          <input
            type="checkbox"
            name="remember"
            className="mr-2"
            checked={loginInfo.remember}
            onChange={handleChange}
          />
          <label htmlFor="remember" className="text-gray-700">
            Remember me
          </label>
        </div>
        <button
          className="text-white w-full p-3 bg-black mb-6 hover:bg-[#c19a83]"
          onClick={handleSubmit}
        >
          LOG IN
        </button>
        <p className="text-sm text-[#c19a83]">Lost your password?</p>
      </div>
    </>
  );
};

export default LoginForm;
