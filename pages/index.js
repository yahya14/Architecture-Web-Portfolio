import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useIsomorphicLayoutEffect } from "../utils";
import { fastStagger } from "../animations";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import NoSSRWrapper from "../components/NoSSRWrapper";
import { useTheme } from "next-themes";

import Button from "../components/Button";
import Head from "next/head";

// local data
import data from "../data/portfolio-yunus.json";

export default function Welcome() {
  const { theme } = useTheme();

  const router = useRouter();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const textFive = useRef();
  const sigRef = useRef();
  const buttonRef = useRef();
  const goToHome = () => {
    router.push("/home");
  };

  useIsomorphicLayoutEffect(() => {
    fastStagger(
      [
        textOne.current,
        textTwo.current,
        textThree.current,
        textFour.current,
        textFive.current,
        sigRef.current,
        buttonRef.current,
      ],
      { y: 40, x: -10, transform: "scale(0.9)" /*" + skew(15deg)"*/ },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={` ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name.split(" ")[0] + "'s Portfolio"}</title>
      </Head>
      <div className="gradient-circle top-1 tablet:top-1 laptop:top-1"></div>
      <div className="gradient-circle-bottom bottom-2 tablet:bottom-2 laptop:bottom-2"></div>

      <div className="container mx-auto mb-10">
        <Header />
        <div className="mt-10">
          <div className="mt-5">
            <br />
            <br />
            <br />
            <br />

            <h1
              ref={textOne}
              className="text-center text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full"
            >
              Interior Design Portfolio
            </h1>
            <br />
            <h1
              ref={textTwo}
              className="text-center text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-3 tablet:p-2 laptop:p-2"
            >
              {data.name} ({data.studentNumber})
            </h1>
            <h1
              ref={textThree}
              className="text-center text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-3 tablet:p-2 laptop:p-2"
            >
              {data.email} / {data.phone}
            </h1>
            <h1
              ref={textFour}
              className="text-center text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-3 tablet:p-2 laptop:p-2"
            >
              {data.submissionDate}
            </h1>
          </div>
          <br />
          <p
            ref={textFive}
            className="text-center tablet:text-xl laptop:text-xl laptopl:text-xl"
          >
            &quot;I declare that the contents of this portfolio are my own work.
            I understand that any misrepresentation of material as my own will
            result in rejection of my application to Conestoga College&apos;s
            Bachelor of Interior Design program.&quot;
          </p>
          <div
            ref={sigRef}
            className={`${theme === "dark" ? "invert-img" : ""}`}
          >
            <br />
            <NoSSRWrapper>
              <img className={`mx-auto h-10`} src="/images/Signature_blurred.png" />
            </NoSSRWrapper>
          </div>

          <br />
          <br />
        </div>
        <div ref={buttonRef}>
          <NoSSRWrapper>
            <Button
              classes="route-home mx-auto tablet:mx-auto laptop:mx-auto"
              onClick={goToHome}
            >
              Go to Home
            </Button>
          </NoSSRWrapper>
        </div>
      </div>
    </div>
  );
}
