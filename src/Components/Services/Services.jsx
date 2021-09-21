import React from "react";
import man from "../../Image/img/man.png";
import chef from "../../Image/img/chef.png";
import deliver from "../../Image/img/deliver-home.png";
import { RiAlarmWarningLine } from "react-icons/ri";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  return (
    <>
      <div className="container my-5">
        <h2>Why you choose us</h2>
        <p className="mb-3">
          Barton waited twenty always repair in within we do. An delighted{" "}
          <br />
          offending curiosity my is dashwoods. Boy prosperous increasing <br />
          surrounded.
        </p>
        <div className="row mb-5">
          <ServicesCard img={man} title="A Good Auto Responder" icon={<RiAlarmWarningLine />}/> <ServicesCard img={chef} title="A Good Auto Responder" icon={<RiAlarmWarningLine />}/> <ServicesCard img={deliver} title="A Good Auto Responder" icon={<RiAlarmWarningLine />}/>
        </div>
      </div>
    </>
  );
};

export default Services;
