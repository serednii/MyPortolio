"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../portfolio.scss";

const ListItem = ({ children }: any) => {
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
};

export default function JavaScript() {
  return (
    <section className="portfolio__section">
      <h2 className="text-[white] text-center text-[2rem] mb-[1rem]">
        JavaScript
      </h2>
      <ul className="portfolio__items  gap-[20px]  ">
        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="http://shop.smm.zzz.com.ua"
          >
            <Image
              loading="lazy"
              src="/images/shop.jpg"
              alt="shop"
              layout="responsive"
              width={270}
              className="portfolio__img"
              height={400}
            />
          </a>
          <div className="link__wrapper ">
            <h2 className="name-site">Shop </h2>
            <a
              className="link-github"
              href="https://github.com/serednii/react-links-type-script/tree/MVC"
            >
              Github
            </a>
            <a
              className="link-github"
              href="https://github.com/serednii/useful_links_cypress"
            >
              Cypress
            </a>
            <a className="link-github" href="./description/useful.html">
              Description
            </a>
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>

        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="http://miroproject.smm.zzz.com.ua/old.html"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/arduino.jpg"
              layout="responsive"
              alt="arduino"
              className="portfolio__img"
            />
          </a>
          <div className="link__wrapper ">
            <h2 className="name-site">Arduino control relay</h2>
            <a
              className="link-github "
              href="https://github.com/serednii/react-links-type-script/tree/MVC"
            >
              Github
            </a>
            <a className="link-github" href="./description/tv.html">
              Description
            </a>
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>
      </ul>
    </section>
  );
}
