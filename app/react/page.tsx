"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../portfolio.scss";
import ListItem from "@/components/Listen";

// const ListItem = ({ children }: any) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.li
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       variants={variants}
//       transition={{ duration: 0.5 }}
//       className="portfolio__item relative"
//     >
//       {children}
//     </motion.li>
//   );
// };

export default function React() {
  return (
    <section className="portfolio__section">
      <h2 className="text-[white] text-center text-[2rem] mb-[1rem]">React</h2>
      <ul className="portfolio__items  gap-[20px]  ">
        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://serednii.github.io/react-links-type-script/"
          >
            <Image
              loading="lazy"
              src="/images/usefullinks.jpg"
              alt="usefullinks"
              layout="responsive"
              width={270}
              className="portfolio__img"
              height={400}
            />
          </a>
          <div className="link__wrapper ">
            <h2 className="name-site">Useful Links</h2>
            <a
              className="link-github "
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
            href="http://tv.smm.zzz.com.ua/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/reactTV.jpg"
              layout="responsive"
              alt="tv"
              className="portfolio__img"
            />
          </a>
          <div className="link__wrapper ">
            <h2 className="name-site">TV SHOP</h2>
            <a className="link-github" href="./description/tv.html">
              Description
            </a>
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>

        <ListItem>
          <a
            className="portfolio__link"
            target="_blank"
            href="http://chat.smm.zzz.com.ua/"
          >
            <Image
              width={270}
              height={400}
              loading="lazy"
              src="/images/chat.jpg"
              layout="responsive"
              alt="chat"
              className="portfolio__img "
            />
          </a>
          <div className="link__wrapper  ">
            <h2 className="name-site">Chat</h2>
            <a className="link-github" href="./description/chat.html">
              Description
            </a>
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>
      </ul>
    </section>
  );
}
