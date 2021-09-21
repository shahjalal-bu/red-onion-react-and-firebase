import React, { useState } from "react";
import { useParams } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ProductDetails.module.css";
import { CartState } from "../../contexts/DataContext";
import { FormControl } from "react-bootstrap";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const {
    state: { products, cart },
    dispatch,
  } = CartState();
  const product = products.filter((pd) => pd.key === id);
  const { name, fullDescription, price, image} = product[0];
  //handle count

  const handleCount = (e) => {
    const handler = e.target.innerText;
    if (handler === "-" && count > 1) {
      setCount((count) => count - 1);
    }
    if (handler === "+") {
      setCount((count) => count + 1);
    }
  };
  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-lg-center p-5">
          <h1 className="my-5">{name}</h1>
          <p className="lead">{fullDescription}</p>
          <h2 className="my-5">${price}</h2>
          <div className="d-flex">
            {cart.some((p) => p.key === id) ? (
              <div className={`${styles.productBtn} bg-secondary`}>
                <FaShoppingCart />{" "}
                <div
                  style={{ marginLeft: "5px" }}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product[0],
                    })
                  }
                >
                  Remove Form Cart
                </div>
              </div>
            ) : (
              <div className={styles.productBtn}>
                <FaShoppingCart />{" "}
                <div
                  style={{ marginLeft: "5px" }}
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { key: product[0], qty: count },
                    })
                  }
                >
                  Add To Cart
                </div>
              </div>
            )}
            <div className={`${styles.controllerBtn} d-flex`}>
              <div className={`${styles.controller}`} onClick={handleCount}>
                -
              </div>
              <FormControl
                className="mx-2"
                value={count}
                style={{ width: "35px", border: "none" }}
                onChange={(e) =>setCount(e.target.value)}
              />
              <div className={`${styles.controller}`} onClick={handleCount}>
                +
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 py-5">
          <img src={image} alt="" className="w-100 mt-5" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
