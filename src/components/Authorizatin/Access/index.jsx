import React, { useState, useContext } from "react";
import { obj } from "../../mock/data";
import { useNavigate } from "react-router-dom";
import { message, } from "antd";
// import { ThemeContext } from "./../../Component/contexts/ThemeContext";
import LanguageContext from "../../Component/contexts/LanguageContext";

const Access = () => {
  const [body, setBody] = useState([]);
  const [val, setVal] = useState([]);
  const [com, setCom] = useState([]);
  const [colors, setColors] = useState([]);
  const navigate = useNavigate();
  const [messageApi] = message.useMessage();
  const { language } = useContext(LanguageContext);

  const key = "updateable";

  const openMassage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
  };

  const info = () => {
    message.success(language==='en'?"You are logged in":language==='ru'?"Вы вошли в систему":"Tizimga kirdingiz");
  };
  const error = () => {
    message.error(language==='en'?"Please enter correct name":language==='ru'?"Пожалуйста, введите правильное имя":"Iltimos, to'g'ri ismni kiriting");
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
        : error();
      let comparison = `Welcome ${body.name}`;
      let colr = body.name;
      setVal(value);
      setCom(comparison);
      setColors(colr);
      if (response) {
        openMassage();
        localStorage.setItem("token", jane.token);
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
      :  error();
    let comparison = `Welcome ${body.name}`;
    let colr = body.name;
    setVal(value);
    setCom(comparison);
    setColors(colr);
    if (response) {
      openMassage();
      localStorage.setItem("token", jane.token);
      info();
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col  justify-center items-center gap-7  py-[10px]  box-border border border-green-500 rounded w-full max-w-[550px] min-w-[350px]   my-12 text-2xl font-bold z-[888] ${
          val === com
            ? "bg-green-900 text-white"
            : colors.length <= 1
            ? "bg-defaultDarkBg text-black"
            : "bg-red-900 text-white"
        } `}
      >
        <p className="bg-transparent text-lg text-white">{language==='en'?"Enter Author's name":language==='ru'?"Введите имя автора":"Muallifning ismini kiriting"}</p>
        <input
          onChange={onChange}
          onKeyDown={press}
          name="name"
          type="password"
          placeholder="*******"
          className="text-green-500 border border-green-500 p-2.5 w-[300px] box-border bg-black focus:outline-none placeholder:text-green-500 placeholder:text-lg"
        />
        <button
          onClick={Submit}
          className="text-green-500 border-2 border-green-500 p-2.5 w-[300px] active:opacity-60"
        >
         {language==='en'?"Authorize":language==='ru'?"Авторизоваться":"Tizimga kirish"}
        </button>
      </div>
    </>
  );
};

export default Access;
