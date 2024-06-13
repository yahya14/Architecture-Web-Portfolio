import React, { useEffect } from "react";
import { useRef, useState } from "react";
import Header from "../../components/Header";
import ServiceCard from "../../components/ServiceCard";
import Socials from "../../components/Socials";
import WorkCard from "../../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Footer from "../../components/Footer";
import Head from "next/head";
import Button from "../../components/Button";
import Link from "next/link";
import Cursor from "../../components/Cursor";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ModalViewer from "../../components/Modal";

// Local Data
import data from "../../data/portfolio-yunus.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const motivationRef = useRef();
  const profileRef = useRef();
  const ContactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const modalRef = useRef();

  //Modal
  const [isProjectId, setProjectId] = useState(0);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 10,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: textOne.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: ContactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleMotivationScroll = () => {
    window.scrollTo({
      top: motivationRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      profileRef.current,
      { y: 40, x: -10, transform: "scale(0.9)" /*" + skew(15deg)"*/ },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.9)" /*" + skew(15deg)"*/ },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const openModal = (projectId) => {
    setProjectId(projectId);
    onOpen();
    console.log(isOpen);
  };

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name.split(" ")[0] + "'s Portfolio"}</title>
      </Head>
      <div ref={modalRef}>
        <ModalViewer
          {...data.projects.filter((item) => {
            return item.id == isProjectId;
          })[0]}
          {...data.written.filter((item) => {
            return item.id == isProjectId;
          })[0]}
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      </div>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
          handleMotivationScroll={handleMotivationScroll}
        />
        <div className="mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full"
            >
              {data.headerTaglineOne}
            </h1>
            <br />
            <br />
            <img
              ref={profileRef}
              className="mobile: h-60 tablet:h-70 laptop:h-80 shadow-3-strong mx-auto"
              src={`/images/profile_blurred.png`}
            ></img>{" "}
            <br />
            <br />
            <br />
            <h1
              ref={textTwo}
              className="text-center text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-3 tablet:p-2 laptop:p-2"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-center text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-3 tablet:p-2 laptop:p-2"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-center text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-3 tablet:p-2 laptop:p-2"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
        </div>
        <br />
        <div className="text-center mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl tablet:text-3xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full p-1 tablet:p-2 text-bold w-4/5 mob:w-full">
            Projects.
          </h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                imgSet={project.imageSrcSet}
                name={project.title.toUpperCase()}
                description={project.description}
                onClick={() => openModal(project.id)}
              />
            ))}
          </div>
        </div>

        <div className="bg-sky mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1
            ref={motivationRef}
            className="text-center text-2xl tablet:text-3xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full p-1 tablet:p-2 text-bold w-4/5 mob:w-full"
          >
            Motivation.
          </h1>
          <br/>
          <h1
            ref={motivationRef}
            className="text-center font-semibold indent-8 text-l tablet:text-1xl laptop:text-1xl laptopl:text-2xl p-1 tablet:p-2"
          >
            Why I am interested in Interior Design.
          </h1>
          <div className="mt-5 tablet:mt-10 gap-4">
            {data.written.map((item) => {
              return item.text.split("<br>").map((textline) => {
                return (
                  <>
                    <p className={"text-left indent-8 tablet:mx-40 laptop:mx-40 laptopl:mx-40 text-l tablet:text-1xl laptop:text-1xl laptopl:text-2xl p-1 tablet:p-2 "}>{textline}</p>
                    <br />
                  </>
                );
              });
            })}
          </div>
        </div>
        <div ref={ContactRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
