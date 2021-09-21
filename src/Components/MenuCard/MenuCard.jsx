import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./MenuCard.module.css";

const MenuCard = ({
  id,
  image,
  shortDescription,
  name,
  price
}) => {
  return (
    <div className="col-md-4">
     <Link to={`/product/${id}`}>
        <Card className={styles.cardStyle}>
          <Card.Img
            variant="top"
            style={{ width: "50%", margin: `15px auto` }}
            src={image}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{shortDescription}</Card.Text>
            <h3>$ {price}</h3>
          </Card.Body>
        </Card>
     </Link>
    </div>
  );
};

export default MenuCard;
