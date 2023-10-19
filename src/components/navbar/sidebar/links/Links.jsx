import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    { name: "Главная", href: "Homepage" },
    { name: "Преимущества", href: "Services" },
    { name: "Портфолио", href: "Portfolio" },
    { name: "Контакты", href: "Contacts" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item.href}
          href={`#${item.href}`}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
