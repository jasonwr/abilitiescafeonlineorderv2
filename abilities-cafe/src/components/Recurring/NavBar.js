import React, { useContext } from "react";
import { Navbar, Icon, NavItem, Container } from "react-materialize";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import AuthContext from "../../contexts/AuthContext";
import logo from "../../pageLogo/AbilitiesCafeLogoFinal-1.png";
import { useLocation } from "react-router";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const { logout } = useContext(AuthContext);
  const onSignOut = async () => {
    try {
      await logout();
    } catch {
      console.log("error logging out");
    }
  };

  return (
        <Navbar
          alignLinks="right"
          brand={
            <a href="/" className="brand-logo center">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "65px", height: "auto" }}
              />
            </a>
          }
          centerLogo
          id="mobile-nav"
          className="custom-navbar"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          {location.pathname !== "/login" && location.pathname !== "/admin" && (
            <NavItem>
              Cart
              <Icon left>
                <AiOutlineShoppingCart />
              </Icon>
            </NavItem>
          )}
          {location.pathname === "/admin" && (
            <NavItem onClick={onSignOut}>
              Sign out
              <Icon left>
                <FiLogOut />
              </Icon>
            </NavItem>
          )}
        </Navbar>
  );
};

export default NavBar;
