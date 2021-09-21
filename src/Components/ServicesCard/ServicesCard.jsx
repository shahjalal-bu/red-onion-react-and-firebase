import React from "react";
import { Card } from "react-bootstrap";

const ServicesCard = ({ img, icon, title }) => {
  return (
    <div className="col-md-4">
      <Card style={{ border: "0px", paddingRight: "25px" }}>
        <Card.Img
          variant="top"
          style={{ height: "400px"}}
          src={img}
        />
        <Card.Body>
          <h3 className="my-4 d-flex align-items-center">
            <span
              style={{ color: "red", marginRight: "10px", lineHeight: "10px" }}
            >
              {icon}
            </span>{" "}
            {title}
          </h3>
          <p style={{ padding: `0px 12px` }}>
            Keep your system in sync with automatic web hook based notification
            each time link is paid and how we dream about our future.
            <br />
            <br />
            <a href="/" style={{ color: `blue` }}>
              See More
            </a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesCard;
