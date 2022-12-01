import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import Home from './pages/Home';
import { navbar } from "./utils/navbar";
import { obj } from "./components/mock/data";
import Authorization from "./pages/Authorization";
import { useEffect } from "react";

function App() {
  let tokn = obj.map((item) => item.token);
  const navigate = useNavigate()
  // console.log(tokn === localStorage.getItem("token"));
  // console.log(localStorage.getItem("token"));
  return (
    <>
      <Routes>
        {localStorage.getItem("token") ? (
          <Route element={<Navbar />}>
            {navbar.map((value, index) => (
              <>
                <Route key={index} path={value.path} element={value.element} />
              </>
            ))}
          </Route>
        ) : (
          <Route path="/auth" element={<Authorization />} /> 
          // <Redirect to="/login" /> 
        )}
        <Route path="*" element={<h1 style={{color: "white"}}>404 Not Found</h1>} />
        <Route path="/" element={<Navigate to={"/auth"} />} />
      </Routes>
    </>
  );
}

export default App;
