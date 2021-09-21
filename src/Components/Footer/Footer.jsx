import React from "react";
import img from "../../Image/logo.png";

const Footer = () => {
  return (
    <footer
      style={{ background: "black"}}
    >
      <div className="container">
        <div className="row p-3">
          <div className="col-md-6">
            <div style={{ width: "200px" }}>
              <img src={img} alt="logo" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="col-md-3 text-light" style={{ lineHeight: "35px" }}>
            About Online food
            <br /> Read our blog
            <br />
            Sign up to deliver
            <br />
            Add your restaurant
            <br />
          </div>
          <div className="col-md-3 text-light" style={{ lineHeight: "35px" }}>
            Get help
            <br />
            Read FAQs
            <br />
            View all cities
            <br />
            Restaurant near me
            <br />
          </div>
        </div>
        <div className="row mt-5 text-light">
          <div className="col-md-6">
            <p>Copyright © 2020 Online food</p>
          </div>
          <div className="col-md-2">Private Policy.</div>
          <div className="col-md-2">Terms of Use</div>
          <div className="col-md-2">Pricing</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
