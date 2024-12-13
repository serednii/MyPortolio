"use client";
import Image from "next/image";
import "../portfolio.scss";
import ListItem from "@/components/Listen";
import Link from "@/node_modules/next/link";

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
            <Link className="link-github" href="/description/useful">
              Description
            </Link>
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
            <a
              className="link-github "
              href="https://github.com/serednii/chatClient"
            >
              Github
            </a>
            <Link className="link-github" href="/description/chat">
              Description
            </Link>
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
            <a
              className="link-github "
              href="https://github.com/serednii/react-tv"
            >
              Github
            </a>
            <a className="link-github" href="./description/tv">
              Description
            </a>
          </div>
          <div className="portfolio__overlay"></div>
        </ListItem>
      </ul>
    </section>
  );
}
