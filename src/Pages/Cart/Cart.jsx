import React, { useEffect, useState } from "react";
import {
  ListGroup,
  Button,
  Row,
  Col,
  Container,
  FormControl,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../contexts/DataContext";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  const [totalItems, setTotalItems] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  useEffect(() => {
    setTotalItems(
      cart.reduce((acc, curr) => acc + Number(curr.qty), 0)
    );
  }, [cart]);
  console.log(totalItems);

  console.log(total);
  return (
    <>
      <div className="home">
        <div className="productContainer"></div>
        <div className="filters summary">
          <span className="title">Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total : $ {total}
          </span>
          <Button type="button" disabled={cart.length === 0}>
            Proceed To CheckOut
          </Button>
        </div>
      </div>
      <Container style={{ minHeight: "60vh", marginTop: 100 }}>
        <Row>
          <Col md={8} sm={8}>
            <ListGroup>
              {
                cart.map(item => (
                  <ListGroup.Item key={item.key}>
                <Row className="align-items-center">
                  <Col md={2}>
                    <img src={item.image} alt="" className="w-75" />
                  </Col>
                  <Col md={4}>
                    <h3>{item.name}</h3>
                    <p className="lead">{item.shortDescription}</p>
                  </Col>
                  <Col md={2}>{item.qty}</Col>
                  <Col md={2}>
                    <strong>$ {item.price}</strong>
                  </Col>

                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>

          <Col md={4} sm={8}>
            <ListGroup>
              <ListGroup.Item variant="dark">
                <h3>Order Summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <p className="lead">Subtotal ({totalItems} items) :</p> <h3>{total}</h3>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <p className="lead">Shipping Fee :</p> <h3>$ 0.5</h3>
                </div>
              </ListGroup.Item>
               <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <FormControl placeholder="Enter Coupon Code" className="me-2"/>
                  <Button className="p-3" variant="danger">Apply</Button>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <h3>Total :</h3> <h3>$ {total + 0.5}</h3>
                </div>
              </ListGroup.Item>
              <Button variant="warning" size="lg" className="p-4 mt-2">PROCEED TO CHECKOUT</Button>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
