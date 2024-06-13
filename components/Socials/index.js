import React from "react";
import Button from "../Button";
import { useTheme } from "next-themes";
//import instagramImg from "../../public/Socials/instagram.png";

import yourData from "../../data/portfolio-yunus.json";
import { Image } from "@nextui-org/react";
import NoSSRWrapper from "../NoSSRWrapper";

const Socials = ({ className }) => {
  const { theme } = useTheme();
  const openWindowHandler = (social) => {
    if (!social.link.includes("mailto:")) {
      window.open(social.link);
    } else {
      window.location.href = social.link;
    }
  };

  return (
    <NoSSRWrapper>

    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => openWindowHandler(social)}>
          {social.img && (
            <div className={`${theme === "dark" ? "invert-img" : ""}`}>
              <img src={social.img} alt="IMG" width="40px" height="40px" />
            </div>
          )}
          {social.title}
        </Button>
      ))}
    </div>
      </NoSSRWrapper>
  );
};

export default Socials;
