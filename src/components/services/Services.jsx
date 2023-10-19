import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    // y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    // y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const inViewRef = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Я ориентирован на помощь вашему бренду расти <br />и двигаться вперед.
        </p>
        <hr></hr>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Уникальные</motion.b> идеи
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Для вашего</motion.b>{" "}
            Бизнеса
          </h1>
          <button>Что я делаю?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Преимущества</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            totam, quis reprehenderit unde beatae magnam sed, eligendi eos atque
            nobis minima et saepe, quia laudantium ut ab ducimus natus neque?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          variants={variants}
        >
          <h2>Преимущества</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            totam, quis reprehenderit unde beatae magnam sed, eligendi eos atque
            nobis minima et saepe, quia laudantium ut ab ducimus natus neque?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          variants={variants}
        >
          <h2>Преимущества</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            totam, quis reprehenderit unde beatae magnam sed, eligendi eos atque
            nobis minima et saepe, quia laudantium ut ab ducimus natus neque?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          variants={variants}
        >
          <h2>Преимущества</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            totam, quis reprehenderit unde beatae magnam sed, eligendi eos atque
            nobis minima et saepe, quia laudantium ut ab ducimus natus neque?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
