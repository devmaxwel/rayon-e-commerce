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
import { FaShoppingCart,  } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
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
              fontWeight:'bold'
            }}
          >
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" >
                  <h3 style={{
                    fontWeight:'bold'
                }} >FAST DELIVERY WITHIN NAIROBI</h3>
                </div>
                <div class="carousel-item" >
                  <h2>0.5% Delivery Fee</h2>
                </div>
              </div>
            </div>
          </div>
        </Navbar>

        <Navbar className={classes.nav3}>
          <Container>
             <div>
             <BsWhatsapp style={{
               fontSize:20,
               color:'#fff'
             }} />
             <span style={{
               color: '#fff',
               margin:'10px'
             }}>Call or Whatsapp: + 2547-407-239 to make order</span>
             </div>
          </Container>
        </Navbar>
      </div>

      <Navbar color="#000" className={classes.nav}>
        <Container>
          <Navbar.Brand style={{
              fontSize:'20px'
            }}>
            <Link to="/" >
              RAYON <GiShoppingCart style={{
                fontSize:'30px',
                color:'orange',
                fontWeight:1000
              }} />
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
            <Dropdown className='btn-group dropleft'>
              <Dropdown.Toggle variant="warning">
                <FaShoppingCart color="#fff" fontSize='27px'/>
                <Badge bg="white" style={{

                  borderRadius:'100%',
                  margin:'1px',
                  fontSize:15
                }} >{9}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  minWidth: 370,
                }}
                className=''
              >
                <span
                  style={{
                    padding: 10,
                  }}
                >
                  Cart is Empty
                </span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
