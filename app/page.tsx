"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  useFirebaseData,
  useCaseStudyData,
} from "@/components/retreivefirebase";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const data = useFirebaseData();
  const case_studies = useCaseStudyData();

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  };

  return (
    <section className="flex flex-col items-stretch justify-center gap-4 py-1 md:py-1 h-fit z-0">
      {/** heros */}
      <div className="max-w-full mx-auto text-center">
        <h1
          className="title rainbow-text"
          style={{
            color: "currentcolor",
            fontWeight: "800",
            fontSize: "clamp(45px, 3.125vw, 70px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          Welcoming you as&nbsp;
        </h1>

        <h1
          className="title"
          style={{
            color: "violet",
            fontWeight: "800",
            fontSize: "clamp(45px, 3.125vw, 70px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          moluccus&nbsp;
        </h1>
        <br />
        <h1
          className="title"
          style={{
            fontSize: "clamp(15px, 3.125vw, 23px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
            maxWidth: "800px",
          }}
        >
          Turning an idea into reality, shaping a reality into something better,
          and making something better greater.
        </h1>

        <br />
        <h2
          className="subtitle"
          style={{
            fontSize: "clamp(15px, 3.125vw, 20px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          A start for a new beginning with moluccus
        </h2>
      </div>

      {/** The follow cards */}
      <div className="hidden lg:flex flex-col relative z-20 w-1/2">
        <div
          className="flex flex-col overflow-hidden height-auto text-foreground box-border bg-content1 border border-boundary outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl transition-transform-background motion-reduce:transition-none max-w-[300px] absolute left-[80px] -top-[80px] animate-[levitate_16s_ease_infinite] border-none"
          
        >
          <div className="flex p-3 z-10 w-full items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl justify-between">
            <div className="flex gap-5">
              <span
                
                className="flex relative justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs bg-default text-default-foreground rounded-full ring-0 ring-offset-0 ring-offset-background dark:ring-offset-background-dark ring-default"
              >
                <Image
                  alt="Zoey Lang"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                  style={{ color: "transparent" }}
                  srcSet="https://app.requestly.io/delay/5000/https://moluccus.vercel.app/logo.png 1x, https://app.requestly.io/delay/5000/https://moluccus.vercel.app/logo.png 2x"
                  src="https://app.requestly.io/delay/5000/https://moluccus.vercel.app/logo.png"
                  data-loaded="true"
                />
              </span>
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-sm font-semibold leading-none text-default-600">
                  Moluccus
                </h4>
                <h5 className="text-sm tracking-tight text-default-400">
                  @moluccus
                </h5>
              </div>
            </div>

            <Link
              isExternal
              as={NextLink}
              href={siteConfig.links.github}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              follow
            </Link>
          </div>
          <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased px-3 py-0">
            <p className="text-sm pl-px text-default-400">
              Full-stack technological company, @moluccus lover she/her&nbsp;
              <span aria-label="confetti" role="img">
                🎉
              </span>
            </p>
          </div>
          <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-xl gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-sm">1.82k</p>
              <p className=" text-default-400 text-sm">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-sm">97.1K</p>
              <p className="text-default-400 text-sm">Followers</p>
            </div>
          </div>
        </div>
      </div>

      {/** Buttons */}
      <div className="flex gap-3 items-center justify-center">
        <Link
          isExternal
          as={NextLink}
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/** search box */}
      <div className="flex mt-8 items-center justify-center">
        <Snippet hideSymbol hideCopyButton variant="bordered">
          <span>
            Your solution for a <Code color="primary">Better Tomorrow</Code>
          </span>
        </Snippet>
      </div>

      {/** Features Title*/}
      <div>
        <h1
          className="title"
          style={{
            color: "violet",
            fontWeight: "800",
            fontSize: "clamp(45px, 3.125vw, 70px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          FEATURES
        </h1>
      </div>

      {/** Features */}
      <div className="flex flex-grid justify-start z-0">
        <div className="max-w-full mx-auto grid grid-cols-2 grid-rows-12 sm:grid-cols-4 sm:grid-rows-12 gap-2">
          {siteConfig.features.map((item, key) => (
            <div className="flex col-span-1 max-w-full mx-auto" key={key}>
              <Card isFooterBlurred radius="2xl" className="border-none w-auto">
                <CardBody>
                  <h4
                    className="rainbow-text"
                    style={{
                      color: "primary",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/** Support Cards */}
      <div className="max-w-full flex w-full flex-col gap-8 mt-10">
        <div className="text-center justify-center w-full max-w-full justify-items-center">
          <div className="flex flex-col gap-2 justify-center w-full text-center items-center">
            <div className="flex md:inline-flex flex-col md:flex-row items-center">
              <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
                OUR COMMUNITY&nbsp;
              </h1>
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="50"
                role="presentation"
                viewBox="0 0 24 24"
                width="50"
                className="text-pink-500 animate-heartbeat"
                style={{ animationDuration: "2.5s" }}
              >
                <path
                  d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <p className="mt-5 text-center flex justify-center items-center w-full max-w-full justify-items-center">
            At Moluccus, we believe in a collaborative model of talent sourcing,
            inspired by platforms like GitHub. Instead of traditional hiring, we
            collaborate with freelancers and upcoming talents who possess the
            skills required for our projects.
            <br />
            <br />
            By outsourcing their expertise, we aim to create a mutually
            beneficial partnership where we provide mentorship, guidance, and
            support to help them grow professionally. Together, we work on
            projects, share knowledge, and celebrate the successes we achieve as
            a team.
          </p>

          <span
            aria-hidden="true"
            className="w-px h-px block"
            style={{ marginLeft: "0.25rem", marginTop: "3rem" }}
          />

          <div className="flex flex-grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2 justify-center">
            <button
              className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] z-0"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-0 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-pink-500"
                  >
                    <g
                      clipPath="url(#a)"
                      clipRule="evenodd"
                      fill="currentColor"
                      fillRule="evenodd"
                    >
                      <path d="M21.865 5.166A11.945 11.945 0 0 1 24 12.001c0 2.54-.789 4.895-2.135 6.834l-3.109-3.109A7.679 7.679 0 0 0 19.714 12a7.679 7.679 0 0 0-.958-3.725l3.109-3.109Z"></path>
                      <path d="m18.834 2.135-3.108 3.109a7.714 7.714 0 1 0 0 13.513l3.108 3.108A11.946 11.946 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0c2.54 0 4.895.789 6.834 2.135Z"></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h24v24H0z" fill="#fff"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-base font-semibold">Progress</p>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                  className="text-white"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </div>

              <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                <p className="font-normal text-base text-default-500">
                  Our current running projects under development.
                </p>
              </div>
            </button>

            <button
              className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-0 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-pink-500"
                  >
                    <g clipPath="url(#a)" fill="currentColor">
                      <path d="M15.294 17.986c4.766 0 8.63-4.026 8.63-8.993C23.923 4.026 20.06 0 15.293 0c-4.766 0-8.63 4.026-8.63 8.993 0 4.967 3.864 8.993 8.63 8.993ZM4.218 0H0v23.991h4.218V0Z"></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h24v24H0z" fill="#fff"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-base font-semibold">Achieved</p>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="18"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="18"
                  className="text-white"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </div>

              <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                <p className="font-normal text-base text-default-500">
                  Our achieved projects that are available to use
                </p>
              </div>
            </button>
          </div>

          {/** Our teams */}
          <div className="relative mt-32 mb-40 md:mt-40 md:mb-40 w-full flex items-center justify-center">
            <div className="relative inline-block">
              <div
                className="relative flex items-center justify-center text-center rounded-full bg-transparent"
                style={{ width: "80px", height: "80px" }}
              >
                <button
                  className="group relative inline-flex items-center justify-center box-border appearance-none select-none font-normal subpixel-antialiased data-[pressed=true]:scale-95 overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background text-sm rounded-full p-0 gap-0 transition-transform-colors motion-reduce:transition-none bg-default text-default-foreground min-w-[2.5rem] w-auto h-auto bg-gradient-to-b from-[#FF1CF7] to-[#7928CA] z-10"
                  type="button"
                  aria-label="Become a sponsor"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="65"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="65"
                    className="flex items-center justify-center rounded-full text-white"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M6 12h12"></path>
                      <path d="M12 18V6"></path>
                    </g>
                  </svg>
                </button>
              </div>

              {/** 1st */}
              <div
                className="absolute rounded-full bg-transparent"
                style={{ width: "130px", top: "21.6667px", left: "21.6667px" }}
              >
                {/** 1 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(130px, 0px)" }}
                >
                  <Image
                    src="/sponsors/undefined"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="JO"
                  />
                  <span
                    aria-label="JO"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-normal text-center text-inherit"
                    role="img"
                  >
                    JO
                  </span>
                </span>

                {/** 2 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(118.761px, 52.8758px)" }}
                >
                  <Image
                    src="/sponsors/undefined"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="DH"
                  />
                  <span
                    aria-label="DH"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-normal text-center text-inherit"
                    role="img"
                  >
                    DH
                  </span>
                </span>

                {/** 3 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(86.987px, 96.6088px)" }}
                >
                  <Image
                    src="/sponsors/292380.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="MA"
                    data-loaded="true"
                  />
                </span>

                {/** 4 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-16 h-16 text-base text-warning-foreground rounded-full ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-warning ring absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(40.1722px, 123.637px)" }}
                >
                  <Image
                    src="/logo.png"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="Mo"
                    data-loaded="true"
                  />
                </span>

                {/** 5 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-13.5887px, 129.288px)" }}
                >
                  <Image
                    src="/sponsors/347048.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="WI"
                    data-loaded="true"
                  />
                </span>

                {/** 6 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-65px, 112.583px)" }}
                >
                  <Image
                    src="/sponsors/374896.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="CH"
                    data-loaded="true"
                  />
                </span>

                {/** 7 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-primary-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-focus absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-105.172px, 76.4121px)" }}
                >
                  <Image
                    src="/sponsors/375034.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="PR"
                    data-loaded="true"
                  />
                </span>

                {/** 8 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-16 h-16 text-base text-warning-foreground rounded-full ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-warning ring absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-127.159px, 27.0285px)" }}
                >
                  <Image
                    src="/sponsors/395990.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="LI"
                    data-loaded="true"
                  />
                </span>

                {/** 9 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-127.159px, -27.0285px)" }}
                >
                  <Image
                    src="/sponsors/404415.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="RH"
                    data-loaded="true"
                  />
                </span>

                {/** 10 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-105.172px, -76.4121px)" }}
                >
                  <Image
                    src="/sponsors/407510.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="HI"
                    data-loaded="true"
                  />
                </span>

                {/** 11 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-65px, -112.583px)" }}
                >
                  <Image
                    src="/sponsors/undefined"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="KR"
                  />
                  <span
                    aria-label="KR"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-normal text-center text-inherit"
                    role="img"
                  >
                    KR
                  </span>
                </span>

                {/** 12 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(-13.5887px, -129.288px)" }}
                >
                  <Image
                    src="/sponsors/438158.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="EL"
                    data-loaded="true"
                  />
                </span>

                {/** 13 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(40.1722px, -123.637px)" }}
                >
                  <Image
                    src="/sponsors/undefined"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="GA"
                  />
                  <span
                    aria-label="GA"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-normal text-center text-inherit"
                    role="img"
                  >
                    GA
                  </span>
                </span>

                {/** 14 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(86.987px, -96.6088px)" }}
                >
                  <Image
                    src="/sponsors/439182.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="JA"
                    data-loaded="true"
                  />
                </span>

                {/** 15 */}
                <span
                  
                  className="flex justify-center items-center box-border overflow-hidden align-middle z-10 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background w-10 h-10 text-xs text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200"
                  style={{ transform: "translate(118.761px, -52.8758px)" }}
                >
                  <Image
                    src="/sponsors/442878.jpg"
                    className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                    alt="JE"
                    data-loaded="true"
                  />
                </span>
              </div>

              {/** more */}
              <div className="absolute top-1/2 left-1/2 overflow-visible -z-10">
                <div
                  className="absolute animate-expand rounded-full"
                  style={{
                    width: "120px",
                    height: "120px",
                    top: "calc(-60px)",
                    left: "calc(-60px)",
                    animationPlayState: "running",
                    animationDelay: "1s",
                    border: "1.5px solid rgba(121, 40, 202, 0.4)",
                    background:
                      "linear-gradient(-180deg, rgba(121,40,202,0.4) 40%, hsl(var(--nextui-background)) 100%)",
                  }}
                />

                <div
                  className="circle circle-1 absolute animate-expand-opacity"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    top: "calc(-100px)",
                    left: "calc(-100px)",
                    animationPlayState: "running",
                    animationDelay: "0.5s",
                    border: "1px solid rgba(121, 40, 202, 0.4)",
                    background:
                      "linear-gradient(-180deg, rgba(121,40,202,0.30000000000000004) 20%, hsl(var(--nextui-background)) 100%)",
                  }}
                />

                <div
                  className="circle circle-2 absolute animate-expand-opacity"
                  style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    top: "calc(-140px)",
                    left: "calc(-140px)",
                    animationPlayState: "running",
                    animationDelay: "1s",
                    border: "1px solid rgba(121, 40, 202, 0.3)",
                    background:
                      "linear-gradient(-180deg, rgba(121,40,202,0.2) 20%, hsl(var(--nextui-background)) 100%)",
                  }}
                />

                <div
                  className="circle circle-3 absolute animate-expand-opacity"
                  style={{
                    width: "360px",
                    height: "360px",
                    borderRadius: "50%",
                    top: "calc(-180px)",
                    left: "calc(-180px)",
                    animationPlayState: "running",
                    animationDelay: "1.5s",
                    border: "1px solid rgba(121, 40, 202, 0.2)",
                    background:
                      "linear-gradient(-180deg, rgba(121,40,202,0.09999999999999998) 20%, hsl(var(--nextui-background)) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** FAQ Title*/}
      <div>
        <h1
          className="title"
          style={{
            color: "violet",
            fontWeight: "800",
            fontSize: "clamp(45px, 3.125vw, 70px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          FAQ
        </h1>
      </div>

      {/** FAQ */}
      <div className="flex flex-grid justify-start z-0">
        <div className="max-w-full mx-auto grid grid-cols-1 grid-rows-12 sm:grid-cols-4 sm:grid-rows-12 gap-2">
          {data.map((item) => (
            <div
              className="flex col-span-1 max-w-full mx-auto"
              key={item.childKey}
            >
              <Card isFooterBlurred radius="2xl" className="border-none w-auto">
                <CardBody>
                  <h1
                    className="title"
                    style={{
                      color: "currentcolor",
                      fontWeight: "800",
                      fontSize: "clamp(25px, 3.125vw, 28px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    {item.childData.title}
                  </h1>

                  <p>{item.childData.description}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/** More Information */}
      <div className="w-full prose prose-neutral">
        <h1
          data-id="avatar"
          data-level="1"
          data-name="Avatar"
          id="avatar"
          className="title rainbow-text mt-10"
          style={{
            color: "currentcolor",
            fontWeight: "800",
            fontSize: "clamp(45px, 3.125vw, 70px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          OUR FORE SIGHTS
        </h1>

        <p
          style={{
            color: "currentcolor",
            fontWeight: "600",
            fontSize: "clamp(18px, 3.125vw, 20px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          We are proud to offer an embedded view of our Figma design page, which
          provides a comprehensive display of the projects we are currently
          working on, as well as the designs of the products we have
          successfully completed.
          <br />
          <br />
          This transparent approach allows our stakeholders to have a firsthand
          look at our design process and the quality of our work. By providing
          access to our design page, we aim to build trust and confidence in our
          capabilities and commitment to delivering exceptional products.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <a
            className="no-underline hover:opacity-80 active:opacity-50 transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none font-normal subpixel-antialiased data-[pressed=true]:scale-95 overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background px-3 min-w-[6rem] h-8 text-sm gap-2 rounded-md [&amp;>svg]:max-w-[2em] transition-transform-colors motion-reduce:transition-none bg-default-100 dark:bg-default-50 text-default-700"
            
            role="button"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              viewBox="0 0 512 512"
              width="1em"
              className="text-lg text-[#ff4785]"
              
            >
              <g>
                <path
                  d="M356.5,5.2L353.9,63c-0.1,3.2,3.7,5.2,6.3,3.2l22.6-17.1L401.9,64c2.5,1.7,5.8,0,6-3l-2.2-58.8l28.4-2.2   c14.7-1,27.3,10.8,27.3,25.6v460.8c0,14.7-12.3,26.3-26.9,25.6L91.1,496.6c-13.3-0.6-24.1-11.3-24.5-24.7l-16-422.3   c-0.8-14.2,9.9-26.3,24.1-27.1L356.2,4.7L356.5,5.2z M291,198.4c0,10,67.4,5.1,76.6-1.7c0-68.2-36.7-104.3-103.6-104.3   c-67.2,0-104.5,36.8-104.5,91.6c0,94.9,128,96.6,128,148.4c0,15-6.8,23.5-22.4,23.5c-20.5,0-28.8-10.4-27.7-46.1   c0-7.7-77.8-10.3-80.4,0c-5.7,86,47.6,110.9,108.7,110.9c59.6,0,106.1-31.7,106.1-89.1c0-101.7-130.1-99-130.1-149.3   c0-20.7,15.4-23.4,24.1-23.4c9.7,0,26.7,1.5,25.4,39.8L291,198.4z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            Storybook
          </a>

          <a
            className="no-underline hover:opacity-80 active:opacity-50 transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none font-normal subpixel-antialiased data-[pressed=true]:scale-95 overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background px-3 min-w-[6rem] h-8 text-sm gap-2 rounded-md [&amp;>svg]:max-w-[2em] transition-transform-colors motion-reduce:transition-none bg-default-100 dark:bg-default-50 text-default-700"
            
            role="button"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              fill="currentColor"
              focusable="false"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-2xl text-[#E53E3E]"
              
            >
              <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path>
            </svg>
            @moluccus
          </a>

          <a
            className="no-underline hover:opacity-80 active:opacity-50 transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none font-normal subpixel-antialiased data-[pressed=true]:scale-95 overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background px-3 min-w-[6rem] h-8 text-sm gap-2 rounded-md [&amp;>svg]:max-w-[2em] transition-transform-colors motion-reduce:transition-none bg-default-100 dark:bg-default-50 text-default-700"
            
            role="button"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              aria-hidden="true"
              focusable="false"
              
            >
              <path
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            Source
          </a>

          <a
            className="no-underline hover:opacity-80 active:opacity-50 transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none font-normal subpixel-antialiased data-[pressed=true]:scale-95 overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background px-3 min-w-[6rem] h-8 text-sm gap-2 rounded-md [&amp;>svg]:max-w-[2em] transition-transform-colors motion-reduce:transition-none bg-default-100 dark:bg-default-50 text-default-700"
            
            role="button"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              aria-hidden="true"
              focusable="false"
              
            >
              <path
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            Styles source
          </a>
        </div>
        <iframe
          className="w-full border bg-blend-color-dodge backdrop-blur-xl bg-background border-transparent dark:border-default-200/50 object-fit rounded-3xl shadow-lg mt-10 md:mt-10"
          style={{ color: "transparent", background: "transparent" }}
          width="500"
          height="500"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLt8udO6b64A2IRYaOYuBZ5%2Fmetospherus%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DmHmboMkV3Ewryy2M-1"
          allowFullScreen
        />
      </div>

      {/** Case Studies Title*/}
      <div>
        <h1
          className="title"
          style={{
            color: "violet",
            fontWeight: "800",
            fontSize: "clamp(45px, 3.125vw, 70px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          CASE STUDIES
        </h1>
      </div>

      {/** Case studies */}
      <div className="flex flex-grid justify-start z-0">
        <div className="max-w-full mx-auto grid grid-cols-1 grid-rows-12 sm:grid-cols-4 sm:grid-rows-12 gap-2">
          {case_studies.map((item) => (
            <div
              className="flex col-span-1 max-w-full mx-auto"
              key={item.childKey}
            >
              <Card
                isFooterBlurred
                radius="2xl"
                className="border-none w-auto h-auto"
              >
                <Skeleton isLoaded={isLoaded}>
                  <Image
                    alt={item.childData.title}
                    className="object-cover"
                    height={180}
                    src={
                      "https://app.requestly.io/delay/5000/" +
                      item.childData.img
                    }
                    onLoad={handleImageLoad}
                    width="auto"
                  />
                </Skeleton>

                <CardFooter className="before:bg-white/10 overflow-hidden absolute justify-between py-2 before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-lg ml-1 z-10">
                  <Skeleton isLoaded={isLoaded} className="rounded-lg">
                    <h4
                      style={{
                        color: "primary",
                        fontWeight: "800",
                        fontSize: "20px",
                      }}
                    >
                      {item.childData.title}
                    </h4>
                  </Skeleton>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/** Community */}
      <div className="relative z-10 gap-2 w-full flex flex-col items-center mt-6 lg:mt-6">
        <div className="max-w-4xl flex flex-col gap-8">
          <div>
            <div className="flex flex-col gap-2 justify-center w-full items-center">
              <div className="inline-flex items-center">
                <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
                  Community
                </h1>
                &nbsp;&nbsp;
              </div>
            </div>

            <p className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full md:w-full text-center flex justify-center items-center">
              Get involved in our community. Everyone is welcome!
            </p>

            <span
              aria-hidden="true"
              className="w-px h-px block"
              style={{ marginLeft: "0.25rem", marginTop: "3rem" }}
            ></span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
              <button
                className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
                type="button"
                role="button"
              >
                <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
                  <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
                    <svg
                      height="32"
                      viewBox="0 0 24 24"
                      width="32"
                      className="text-[#00ACEE]"
                    >
                      <path
                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-base font-semibold">Twitter</p>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="18"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="18"
                    className="text-white"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </div>
                <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0">
                  <p className="font-normal text-base text-default-500">
                    For announcements, tips and general information.
                  </p>
                </div>
              </button>

              <button
                className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
                type="button"
                role="button"
              >
                <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
                  <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
                    <svg
                      height="32"
                      viewBox="0 0 24 24"
                      width="32"
                      className="text-[#7289DA]"
                    >
                      <path
                        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-base font-semibold">Discord</p>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="18"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="18"
                    className="text-white"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </div>
                <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0">
                  <p className="font-normal text-base text-default-500">
                    To get involved in the community, ask questions and share
                    tips.
                  </p>
                </div>
              </button>

              <button
                className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
                type="button"
                role="button"
              >
                <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
                  <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
                    <svg
                      height="32"
                      viewBox="0 0 24 24"
                      width="32"
                      className="text-[#333] dark:text-[#E7E7E7]"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-base font-semibold">Github</p>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="18"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="18"
                    className="text-white"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </div>
                <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0">
                  <p className="font-normal text-base text-default-500">
                    To report bugs, request features and contribute to the
                    project.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
