import React, { useEffect, useState } from "react";
import hero from "../../utils/hero.json";
import "./hero.scss";

const Hero = () => {
  const [people, setPeople] = useState(hero);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="section-center" id="home">
      {people.map((item, personIndex) => {
        const { id, logo, herotitle, heropara } = item;

        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article className={position}>
            <div
              className="hero"
              style={{
                background: `linear-gradient(4deg, rgba(0,0,0,0.7456232492997199) 28%, rgba(0,0,0,0.2358193277310925) 56%, rgba(0,0,0,0.2358193277310925) 85%), url(${item.bgUrl})`,
              }}
            >
              <div className="hero-banner">
                <div className="hero-logo">
                  <img
                    src="/assets/images/Union.png"
                    className="logo"
                    alt="logo"
                  />
                  <h1 className="hero-title">Logo</h1>
                </div>
                <p className="hero-text">{herotitle}</p>
                <p className="hero-para">{heropara}</p>

                <div className="vl-box">
                  <p className="scroll-tect">Scroll</p>
                  <div className="vl"></div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Hero;
