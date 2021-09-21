import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "./../../Image/logo2.png";
import { RiShoppingCartFill } from "react-icons/ri";
import { CartState } from "../../contexts/DataContext";
import { useAuth } from "../../contexts/AuthContext";
import { FaUserCheck } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";


const Navigation = () => {
  const { state } = CartState();
  const { currentUser, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg" className={`${styles.navbar} fixed-top`}>
      <Container fluid>
        <Navbar.Brand href="#home" className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </Navbar.Brand>

        <Nav className="ms-auto my-auto py-3" style={{ fontWeight: "blod" }}>
          <div>
            <span style={{ marginRight: "10px" }}>
              {state.cart.length ? (
                <Link to="/cart">
                  <RiShoppingCartFill /> <span>{state.cart.length}</span>
                </Link>
              ) : (
                <span onClick={() => alert("Add Product First")}>
                  <RiShoppingCartFill /> <span>{state.cart.length}</span>
                </span>
              )}
            </span>
            {currentUser ? (
              <>
                <FaUserCheck /> <span>{currentUser.displayName}</span>
                <span onClick={logout} style={{ cursor: "pointer" }}>
                  <AiOutlineLogin size={32} />
                </span>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <b>Login</b>
                </NavLink>
                <NavLink to="/signup">
                  <Button className="customBtn">SignUp</Button>
                </NavLink>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
