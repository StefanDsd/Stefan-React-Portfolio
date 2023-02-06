import React from "react";
import "./styles/Testimonials.css";
import { motion } from "framer-motion";


const Testimonials = () => {
  return (
    <div>
      <h2>Projects</h2>

      <div className="testimonials">
        <motion.div
        whileInView={{ x: [-400, 0], opacity: [0, 1] }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
        className="test-carts">
          <h3>neils geiman</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste
            officiis expedita deleniti, velit repellendus laudantium eum dolore
            nesciunt ullam maxime mollitia optio accusantium unde inventore
            doloremque, aliquam fugit vitae?
          </p>
        </motion.div>

        <motion.div
         whileInView={{ x: [-400, 0], opacity: [0, 1] }}
         transition={{ duration: 1.2, ease: "easeIn" }}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         viewport={{ once: true }}
        className="test-carts">
          <h3>Marilla Neiman</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste
            officiis expedita deleniti, velit repellendus laudantium eum dolore
            nesciunt ullam maxime mollitia optio accusantium unde inventore
            doloremque, aliquam fugit vitae?
          </p>
        </motion.div>

        <motion.div
         whileInView={{ x: [-400, 0], opacity: [0, 1] }}
         transition={{ duration: 1.2, ease: "easeIn" }}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         viewport={{ once: true }}
        className="test-carts">
          <h3>Hulk Zeiman</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste
            officiis expedita deleniti, velit repellendus laudantium eum dolore
            nesciunt ullam maxime mollitia optio accusantium unde inventore
            doloremque, aliquam fugit vitae?
          </p>
        </motion.div>

        <motion.div
         whileInView={{ x: [-400, 0], opacity: [0, 1] }}
         transition={{ duration: 1.2, ease: "easeIn" }}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         viewport={{ once: true }}
        className="test-carts">
          <h3>Alex Leiman</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste
            officiis expedita deleniti, velit repellendus laudantium eum dolore
            nesciunt ullam maxime mollitia optio accusantium unde inventore
            doloremque, aliquam fugit vitae?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
