import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return <motion.div className="cursor" animate={position}></motion.div>;
};

export default Cursor;
