import React from "react";
import "./index.modules.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>

      <div className="projects">
        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Berliner Quiz</h3>
          <p>
          Project-1-Berliner-Quiz is a fun and interactive quiz game that tests your knowledge of Berlin, Germany. Developed by my team , Valeria Kurylko, Mulugeta Birish, Hendra Widjaya, the game is built using HTML, CSS, and JavaScript.
          </p>
          <div className="buttons">
            <a
              href="https://hendrawidjaya.github.io/Project-1-Berliner-Quiz/"
              target="_blank"
              rel="noreferrer"
              alt="first project"
            >
              <button className="button">Demo</button>
            </a>
            <a
              href="https://github.com/StefanDsd/Project-1-Berliner-Quiz?organization=StefanDsd&organization=StefanDsd"
              target="_blank"
              rel="noreferrer"
              alt="first project"
            >
              <button className="button">Github</button>
            </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Space Explorer</h3>
          <p>
          Space Explorer is an exciting and educational web application developed by you and your talented colleagues, Stefan Ivanus and Oriane Magnin, during the Wild Code School bootcamp. The application, built using the popular React JS library, allows users to explore the universe and learn about different celestial objects such as planets, moons, stars, and galaxies.
          </p>
          <div className="buttons">
            <a
              href="https://wild-space-explorer.netlify.app/"
              target="_blank"
              rel="noreferrer"
              alt="second project"
            >
              <button className="button">Demo</button>
            </a>
            <a
              href="https://github.com/StefanDsd/Space-explorer"
              target="_blank"
              rel="noreferrer"
              alt="second project"
            >
              <button className="button">Github</button>
            </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Car Rental</h3>
          <p>
          Car Rental App is a dynamic and intuitive web application developed by you and your skilled colleagues, Stefan Ivanus and Andrei-Lucian Leahu, during the Wild Code School bootcamp. The application, built using the popular React library and stylish Tailwind CSS framework, provides users with a seamless car rental experience, from browsing available cars to booking reservations. The app also leverages the power of Supabase, an open-source database, to ensure fast and reliable data storage and retrieval. With its sleek design and user-friendly interface, Car Rental App is sure to become a go-to platform for anyone looking to rent a car hassle-free.
          </p>
          <div className="buttons">
          <a
            href="https://car-rentalapp.vercel.app/"
            target="_blank"
            rel="noreferrer"
            alt="second project"
          >
            <button className="button">Demo</button>
          </a>
          <a href="https://github.com/StefanDsd/car_rental_app" target="_blank" rel="noreferrer" alt="second project">
            <button className="button">Github</button>
          </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Techtree</h3>
          <p>
            Coming soon !
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
