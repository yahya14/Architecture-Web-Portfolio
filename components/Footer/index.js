import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import data from "../../data/portfolio-yunus.json";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl tablet:text-3xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 w-4/5 mob:w-full w-4/5 mob:w-full">Contact.</h1>
          <div className="text-1xl tablet:text-1xl laptop:text-2xl laptopl:text-2xl p-1 tablet:p-2 w-4/5 mob:w-full w-4/5 mob:w-full laptop:p-2">
            <div className="p-1 tablet:p-2">
            For any inquries, please email me at: <a className="email" href={`mailto:${data.email}`}>{data.email}</a> or call me at: <a className="email">{data.phone}</a>
            <br/>
            <br/>
            Check out some more of my works on my Socials: <Socials className={"socials-img"}/>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm mt-2 laptop:mt-10 p-2 laptop:p-0">
        {/* Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link> */}
      </h1>
    </>
  );
};

export default Footer;
