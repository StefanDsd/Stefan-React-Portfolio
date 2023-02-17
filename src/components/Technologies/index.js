import React, { useEffect, useRef, useState } from "react";
import "./index.modules.css";
import { motion } from "framer-motion";
import infoProjects from "../../projects";


const Technologies = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="technologies" id="technologies">
      <h1>Technologies</h1>
          <br />
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {infoProjects.map((name) => {
            return (
              <motion.div className="item" key={name}>
                <img src={name} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
