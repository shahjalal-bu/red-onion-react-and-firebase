import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Herosection.module.css";

const Herosection = () => {
  return (
    <div className={styles.Home_section}>
      <div className={styles.hero_text_container}>
        <h1>Best food waiting for your belly</h1>
        <div className={`${styles.hero_search} mt-5`}>
          <Form.Control
            type="text"
            placeholder="Search..."
            className="w-50"
          />
          
            <Button className="customBtn">Search</Button>
          
        </div>
      </div>
    </div>
  );
};

export default Herosection;
