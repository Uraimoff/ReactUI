import React, { useState, useContext } from "react";
import { obj } from "../../mock/data";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { ThemeContext } from "./../../Component/contexts/ThemeContext";

const Access = () => {
  const [body, setBody] = useState([]);
  const [val, setVal] = useState([]);
  const [com, setCom] = useState([]);
  const [colors, setColors] = useState([]);
  const navigate = useNavigate();
  const [messageApi] = message.useMessage();
  const key = "updateable";
  const { theme, toggleTheme } = useContext(ThemeContext);

  const openMassage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
  };

  const info = () => {
    message.info("You will be redirected");
  };

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  let data = obj.map((item) => item.name);
  const jane = obj.find((obj) => obj.name === body.name);
  let response = data.includes(body.name);

  const press = (e) => {
    if (e.key === "Enter") {
      let value = response
        ? `Welcome ${body.name}`
        : `Access denied ${body.name}`;
      let comparison = `Welcome ${body.name}`;
      let colr = body.name;
      setVal(value);
      setCom(comparison);
      setColors(colr);
      if (response) {
        openMassage();
        localStorage.setItem("token", jane.token);
        alert("You will be redirected");
        info();
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    }
  };

  const Submit = () => {
    let value = response
      ? `Welcome ${body.name}`
      : `Access denied ${body.name}`;
    let comparison = `Welcome ${body.name}`;
    let colr = body.name;
    setVal(value);
    setCom(comparison);
    setColors(colr);
    if (response) {
      openMassage();
      localStorage.setItem("token", jane.token);
      alert("You will be redirected");
      info();
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center gap-7 box-border border border-green-500 rounded w-full max-w-[550px] min-w-[350px] p-8 h-[250px] my-12 text-2xl font-bold z-[888] ${
          val === com
            ? "bg-green-500 text-black"
            : colors.length <= 1
            ? "bg-gray-900 text-black"
            : "bg-red-500 text-black"
        } ${theme === "dark" ? "dark:bg-gray-800 dark:text-white" : ""}`}
      >
        {val}
        <p className="bg-transparent text-lg text-white">Enter Author's name</p>
        <input
          onChange={onChange}
          onKeyDown={press}
          name="name"
          type="password"
          placeholder="****"
          className="text-green-500 border border-green-500 p-2.5 w-[300px] box-border focus:outline-none placeholder:text-green-500 placeholder:text-lg"
        />
        <button
          onClick={Submit}
          className="text-green-500 border-2 border-green-500 p-2.5 w-[300px] active:opacity-60"
        >
          Authorize
        </button>
        <button onClick={toggleTheme} className="mt-4 text-blue-500">
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  );
};

export default Access;
