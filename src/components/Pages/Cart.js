import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../Home/home.module.css";
import pesa from "../../img/pesa.jpg";
import {
  Container,
  ListGroup,
  FormControl,
  Button,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { numberWithComas } from "../Home/SingleProduct";
import { AiFillDelete } from "react-icons/ai";
import {
  CHANGE_CART_QUANTITY,
  REMOVE_FROM_CART,
} from "../../constants/cartConstants";


function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);

  const { cart } = cartList;
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);

  const delivery = (0.5 / 100) * total;
  const totalPrice =Math.round( delivery + total).toFixed();



  return (
    <div className={classes.home}>
      <div className={classes.productContainer}>
        <Container>
          <ListGroup>
            {cart.map((products) => (
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <Image src={products.image} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{products.title}</span>
                  </Col>
                  <Col md={2}>
                    <span>{numberWithComas(products.price)}</span>
                  </Col>
                  <Col md={2}>
                    <span style={{
                      paddingBottom:"5px"
                    }}>Quantity</span>
                    <FormControl
                      as="select"
                      value={products.qty}
                      onChange={(e) => {
                        dispatch({
                          type:CHANGE_CART_QUANTITY,
                          payload:{
                            _id: products._id,
                            qty: e.target.value
                          },
                        })
                      }}
                    >
                      {[...Array(products.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col md={2}>
                    <AiFillDelete
                      style={{
                        color: "red",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch({
                          type: REMOVE_FROM_CART,
                          payload: products,
                        });
                      }}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </div>
      <div className={classes.filtercart}>
        <span>Checkout ({cart.length}) Items</span>
        <span>Items  Price Ksh: {(total)}</span>
        <span>Delivery Fee: {(delivery)}</span>
        <span>Total Price Ksh: {numberWithCommas(totalPrice)}</span>

        <div className={classes.payment}>
          <img src={pesa} alt="pesa" />
          <FormControl
            className="m-auto"
            placeholder="Enter Phone Number"
            style={{
              width: 300,
              margin: "0 10px",
            }}
          ></FormControl>
        </div>
        <div
          style={{
            paddingTop: "30px",
          }}
        >
          <Button
            style={{
              width: "95%",
              margin: "0 10px",
              padding: "15px",
            }}
            variant="success"
          >
            Click to Receive Payment Notfication{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
