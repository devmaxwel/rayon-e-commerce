import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { REMOVE_FROM_CART } from "../../constants/cartConstants";
import { numberWithComas } from "../Home/SingleProduct";

const Header = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const { cart } = cartList;

  return (
    <>
      <div className={classes.top}>
        <Navbar className={classes.nav1}>
          <Container></Container>
        </Navbar>

        <Navbar className={classes.nav2}>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              padding: "0 20px",
              margin: "0 20px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h3
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    FAST DELIVERY WITHIN NAIROBI
                  </h3>
                </div>
                <div className="carousel-item">
                  <h2>0.5% Delivery Fee</h2>
                </div>
              </div>
            </div>
          </div>
        </Navbar>

        <Navbar className={classes.nav3}>
          <Container>
            <div>
              <BsWhatsapp
                style={{
                  fontSize: 20,
                  color: "#fff",
                }}
              />
              <span
                style={{
                  color: "#fff",
                  margin: "10px",
                }}
              >
                Call or Whatsapp: + 2547-407-239 to make order
              </span>
            </div>
          </Container>
        </Navbar>
      </div>

      <Navbar color="#000" className={classes.nav}>
        <Container>
          <Navbar.Brand
            style={{
              fontSize: "20px",
            }}
          >
            <Link to="/">
              RAYON{" "}
              <GiShoppingCart
                style={{
                  fontSize: "30px",
                  color: "orange",
                  fontWeight: 1000,
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Text className="d-flex p-5 m-auto">
            <FormControl
              className="m-auto"
              placeholder="search products, brands, categories"
              style={{
                width: 300,
              }}
            ></FormControl>
            <Button className="m-2" variant="warning" color="#fff">
              Search
            </Button>
          </Navbar.Text>
          <Nav>
            <Dropdown className="btn-group dropleft">
              <Dropdown.Toggle variant="warning">
                <FaShoppingCart color="#fff" fontSize="27px" />
                <Badge
                  bg="white"
                  style={{
                    borderRadius: "100%",
                    margin: "1px",
                    fontSize: 15,
                  }}
                >
                  {cart.length}
                </Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  minWidth: 370,
                }}
                className=""
              >
                {cart.length > 0 ? (
                  <div>
                    {cart.map((product) => {
                      return (
                        <span key={product._id} className={classes.cartItem}>
                          <img
                            src={product.image}
                            alt={product.title}
                            className={classes.cartImage}
                          />
                          <div className={classes.cartDetail}>
                            <span>{product?.title}</span>
                            <span>Ksh. {numberWithComas(product.price)}</span>
                          </div>
                          <AiFillDelete
                            style={{
                              color: "red",
                              fontSize: "20px",
                              cursor:'pointer'
                            }}
                            onClick={() => {
                              dispatch({
                                type: REMOVE_FROM_CART,
                                payload: product,
                              });
                            }}
                          />

                         
                        </span>
                       
                      );
                    })}
                      <Link to='/cart'>
                        <Button variant='warning' style={{
                          margin:'0 10px',
                          width:"95%",
                          fontWeight:'bolder'
                        }}>Proceed To Check Out</Button>
                      </Link>
                  </div>
                ) : (
                  <span>Cart is Empty</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
