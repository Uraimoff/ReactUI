import React, { useEffect } from "react";
import {Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import LaoyoutS from "../LayoutS";
import react from "./../../assets/svg/react.svg";
import logout from "./../../assets/svg/logout.svg";
import {
  Container,
  H3,
  Link,
  Logo,
  Main,
  Nav,
  Opacity,
  OutWr,
  Outimg,
  Section,
  Wrapper,
} from "./style";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  // console.log( typeof location.pathname, " bu page location");
  const component = navbar
    .map((value) => {
      return value.component && value.path;
    })
    .filter((value) => {
      return value[0];
    });
  const dato = component.filter((value) => {
    return value === location.pathname;
  });
  const asdas = dato[0];
  // console.log(dato, "filtr");



// logout function
  // const Logout = useEffect(() => {
  //   localStorage.removeItem("token");
  //   console.log('inside')
  //   setTimeout(() => {
  //         navigate("/buttons");
  //       }, 1000);
  //   }, []);
  const Asd = useEffect(() => {
    if(token===null){
      console.log("token checked");
      }
    }, [token]);
  const Logout = () => {
    localStorage.removeItem("token");
    console.log('inside')
        Asd()
        console.log('navigating')
  }


    // console.log(()=>Logout(), "logout out");

  
  return (
    <>
      <Container>
        <Main>
          <Opacity></Opacity>
          <Wrapper>
            <Section onClick={() => navigate("./home")}>
              <Logo src={react} />
              <H3>React Component</H3>
            </Section>
            <Section>
              <Nav>
                {navbar.map(
                  (value, index) =>
                    !value.component &&
                    !value.hidden && (
                      <Link
                        key={index}
                        className={({ isActive }) => isActive && "active"}
                        to={value.path}
                      >
                        {value.title}
                      </Link>
                    )
                )}
              </Nav>
                <Link onClick={Logout}><Outimg src={logout} alt="" />Logout</Link>
            </Section>
          </Wrapper>
        </Main>
        <OutWr>
          {location.pathname === asdas ? (
            <LaoyoutS>
              <Outlet />
            </LaoyoutS>
          ) : (
            <Outlet />
          )}
        </OutWr>
      </Container>
    </>
  );
};

export default Navbar;
