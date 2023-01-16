import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import {navbar } from "./utils/navbar";
import Authorization from "./pages/Authorization";
import { useEffect } from "react";
import LaoyoutS from "./components/LayoutS";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      navigate("/auth");
    }
  }, [token, navigate]);
  const location = useLocation();
  console.log(location.pathname, "bu sayt location");
  console.log(token, "bu token");
  return (
    <>
      <Routes>
        {token === null ? (
          <Route path="/auth" element={<Authorization />} />
        ) : token ? (
          <>
            <Route element={<Navbar />}>
              {navbar.map(
                (value, index) => 
                  !value.hidden && (
                    <Route
                      key={index}
                      path={`${value.path}`}
                      element={value.element}
                    >
                    </Route>
                  )
              )}
            </Route>
          </>
        ) : null}
        <Route path="*" element={<Navigate to={"/home"} />} />
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
