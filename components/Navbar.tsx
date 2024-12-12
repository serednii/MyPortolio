import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 bg-black z-[20]  w-full  gap-5">
      <h1 className="text-white text-[45px] text-center">
        Portfolio
        {/* <span className="font-thin">Mykola</span> */}
        <span className="text-red-500">.</span>
      </h1>
      {/* <div className="flex flex-row gap-5">
        {Socials.map((social: any) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Navbar;
