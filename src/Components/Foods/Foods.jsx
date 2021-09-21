import React, { useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import styles from "./Foods.module.css";
import { CartState } from "../../contexts/DataContext";
const Foods = () => {
  const [showFoods, setShowFoods] = useState("breakfast");
  const {
    state: { products, cart },
  } = CartState();
  function handleItem(e) {
    setShowFoods(e.target.innerText.toLowerCase());
  }
  return (
    <div>
      <div className="container">
        <div className="row my-4">
          <div className="text-center">
            <button
              className={`${styles.menuButton} ${
                showFoods === "breakfast" && styles.active
              }`}
              onClick={handleItem}
            >
              Breakfast
            </button>
            <button
              className={`${styles.menuButton} ${
                showFoods === "lunch" && styles.active
              }`}
              onClick={handleItem}
            >
              Lunch
            </button>
            <button
              className={`${styles.menuButton} ${
                showFoods === "dinner" && styles.active
              }`}
              onClick={handleItem}
            >
              Dinner
            </button>
          </div>
        </div>
        <div className="row">
          {products.map((item, index) => {
            return (
              item.type === showFoods && (
                <MenuCard
                  key={item._id}
                  image={item.image}
                  shortDescription={item.shortDescription}
                  name={item.name}
                  price={item.price}
                  id={item.key}
                />
              )
            );
          })}
        </div>
        <div className="row text-center my-4">
          <div>
            <button className={cart.length?styles.checkOutBtnActive:styles.checkOutBtn } disabled={cart.length === 0}>
              Checkout Your Foods
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
