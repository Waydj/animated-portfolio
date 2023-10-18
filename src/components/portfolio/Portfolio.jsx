import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "title",
    img: "https://images.pexels.com/photos/18749704/pexels-photo-18749704/free-photo-of-a-small-cabin-in-the-snow-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sapiente consequuntur necessitatibus voluptate. Quasi fugiat, dignissimos temporibus recusandae assumenda aspernatur! Excepturi eaque atque omnis iste architecto quasi amet nostrum natus!",
  },
  {
    id: 2,
    title: "title 2",
    img: "https://images.pexels.com/photos/9367323/pexels-photo-9367323.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sapiente consequuntur necessitatibus voluptate. Quasi fugiat, dignissimos temporibus recusandae assumenda aspernatur! Excepturi eaque atque omnis iste architecto quasi amet nostrum natus!",
  },
  {
    id: 3,
    title: "title 3",
    img: "https://images.pexels.com/photos/1341277/pexels-photo-1341277.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sapiente consequuntur necessitatibus voluptate. Quasi fugiat, dignissimos temporibus recusandae assumenda aspernatur! Excepturi eaque atque omnis iste architecto quasi amet nostrum natus!",
  },
  {
    id: 4,
    title: "title 4",
    img: "https://images.pexels.com/photos/12774059/pexels-photo-12774059.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sapiente consequuntur necessitatibus voluptate. Quasi fugiat, dignissimos temporibus recusandae assumenda aspernatur! Excepturi eaque atque omnis iste architecto quasi amet nostrum natus!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
