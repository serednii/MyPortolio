"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import "../portfolio.scss";

export default function ListItem({ children }: any) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="portfolio__item relative"
    >
      {children}
    </motion.li>
  );
}
