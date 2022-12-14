import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import react from './../../assets/svg/react.svg'
import { Container, H3, Link, Logo, Main, Nav, Opacity, OutWr, Section, Wrapper } from './style'

const Navbar = () => {
  const navigate = useNavigate()
  // console.log( typeof location.pathname, " bu page location");
  return (
    <>
    <Container>
    <Main>
      <Opacity></Opacity>
        <Wrapper>
          {/* <PhoneNavbar>
            <NavbarForPhone />
          </PhoneNavbar> */}
          <Section onClick={() => navigate("./home")}>
            <Logo src={react} />
            <H3>React Component</H3>
          </Section>
          <Section>
            <Nav>

              {navbar.map(
                (value, index) =>
                  !value.component &&!value.hidden && (
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
          </Section>
          <Section>
            {/* {token ? (
              <>
                <Dropdown
                  trigger={["click"]}
                  dropdownRender={menu}
                  placement="bottomRight"
                  arrow
                >
                  <Button
                    style={{
                      width: "140px",
                      height: "44px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    <>
                      <LoginButton>
                        <Buttons
                          width={128}
                          txt={"Profile"}
                          // border={"none"}
                          color={"white"}
                          background={"transparent"}
                        />
                      </LoginButton>
                      <LoginIcon>
                        <img src={login} alt="" />
                      </LoginIcon>
                    </>
                  </Button>
                </Dropdown>
              </>
            ) : (
              <>
                {/* <LoginButton> */}
                  {/* <Buttons width={128} onClick={onClick} txt={"Login"} /> */}
                {/* </LoginButton> */}
                {/* <LoginIcon onClick={onClick}>
                  <img src={login} alt="" />
                </LoginIcon>
              </>
            )}  */}
          </Section>
        </Wrapper>
      </Main>
      <OutWr>
        {/* {location.pathname==="/component"} */}
        <Outlet/>
      </OutWr>
    </Container>
    </>
  )
}

export default Navbar