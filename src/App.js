import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { navbar } from "./utils/navbar";
import Authorization from "./pages/Authorization";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      navigate("/auth");
    } else if (token !== null) {
      navigate("/home");
    }
  }, [token]);
  console.log(token, "bu token");
  return (
    <>
      <Routes>
        {token === null ? (
          <Route path="/auth" element={<Authorization />} />
        ) : token ? (
          <>
            <Route element={<Navbar />}>
              {navbar.map((value, index) => (
                <Route key={index} path={value.path} element={value.element} />
              ))}
            </Route>
          </>
        ) : null}
        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>404 Not Found</h1>}
        />
        <Route
          path="/"
          element={
            <Navigate
              to={token === null ? "/auth" : token ? "/home" : "/home"}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
