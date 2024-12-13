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

export default function Web() {
  return (
    <section className="portfolio__section">
      <h2 className="text-[white] text-center text-[2rem] mb-[1rem]">Web</h2>
      <h3 className="text-[white] text-center text-[1rem] mb-[1rem]">
        HTML, CSS, SCSS, JavaScript, jquery, slick-carousel, mixitup, rateyo,
        PUG, Gulp, Webpack
      </h3>

      <ul className="portfolio__items  gap-[20px]  ">
        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/wawe/"
          >
            <Image
              loading="lazy"
              src="/images/wawe.jpg"
              alt="usefullinks"
              layout="responsive"
              width={270}
              className="portfolio__img"
              height={400}
            />
          </a>
          <div className="link__wrapper ">
            <h2 className="name-site">Wawe</h2>
            <a className="link-github " href="https://github.com/serednii/wawe">
              Github
            </a>
            {/* <a
              className="link-github"
              href="https://github.com/serednii/useful_links_cypress"
            >
              Cypress
            </a>
            <a className="link-github" href="./description/useful.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>

        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/Marketing/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/marketing.jpg"
              layout="responsive"
              alt="marketing"
              className="portfolio__img"
            />
          </a>
          <div className="link__wrapper ">
            <h2 className="name-site">Marketing</h2>
            <a
              className="link-github "
              href="https://github.com/serednii/Marketing"
            >
              Github
            </a>
            {/* <a className="link-github" href="./description/tv.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>

        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/Glee/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/glee.jpg"
              layout="responsive"
              alt="Glee"
              className="portfolio__img "
            />
          </a>
          <div className="link__wrapper  ">
            <h2 className="name-site">Glee</h2>
            <a className="link-github " href="https://github.com/serednii/Glee">
              Github
            </a>
            {/* <a className="link-github" href="./description/chat.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>

        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/Marcho/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/marcho.jpg"
              layout="responsive"
              alt="Marcho"
              className="portfolio__img "
            />
          </a>
          <div className="link__wrapper  ">
            <h2 className="name-site">Marcho</h2>
            <a
              className="link-github "
              href="https://github.com/serednii/Marcho"
            >
              Github
            </a>
            {/* <a className="link-github" href="./description/chat.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>

        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/online-learn/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/online_learn.jpg"
              layout="responsive"
              alt="online-learn/"
              className="portfolio__img "
            />
          </a>
          <div className="link__wrapper  ">
            <h2 className="name-site"> Online Learn</h2>
            <a
              className="link-github "
              href="https://github.com/serednii/online-learn"
            >
              Github
            </a>
            {/* <a className="link-github" href="./description/chat.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>
        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/modern-art/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/modern_art.jpg"
              layout="responsive"
              alt="modern-art/"
              className="portfolio__img"
            />
          </a>
          <div className="link__wrapper">
            <h2 className="name-site">modern_art</h2>
            <a
              className="link-github"
              href="https://github.com/serednii/modern-art"
            >
              Github
            </a>
            {/* <a className="link-github" href="./description/chat.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>
        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/hytte/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/hytte.jpg"
              layout="responsive"
              alt="hytte/"
              className="portfolio__img"
            />
          </a>
          <div className="link__wrapper">
            <h2 className="name-site">Hytte</h2>
            <a className="link-github" href="https://github.com/serednii/hytte">
              Github
            </a>
            {/* <a className="link-github" href="./description/chat.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>

        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/weekend/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/weekend.jpg"
              layout="responsive"
              alt="weekend/"
              className="portfolio__img"
            />
          </a>
          <div className="link__wrapper">
            <h2 className="name-site">Wekend</h2>
            <a
              className="link-github"
              href="https://github.com/serednii/weekend"
            >
              Github
            </a>
            {/* <a className="link-github" href="./description/chat.html">
              Description
            </a> */}
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>
      </ul>
    </section>
  );
}
