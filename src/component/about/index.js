import React from "react";
import "./about.scss";
import { BsArrowRightCircle } from "react-icons/bs";

const About = () => {
  return (
    <>
      <section className="bg-gray" id="about">
        <div className="about-img-box">
          <img src="/assets/images/coding.png" alt="" />
          <div className="about-desc">
            <h3>Lorem ipsum </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <p>
              <b>
                Lorem Ipsum <BsArrowRightCircle />
              </b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
