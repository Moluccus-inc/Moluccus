import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { User } from "@nextui-org/user";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-4 py-1 md:py-1 h-fit z-0">
      <div
        className="max-w-full mx-auto text-center"
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className="rainbow-text"
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
          ABOUT US
        </h1>

        <h5
          className="max-w-fit mt-5 md:mr-80 md:ml-80"
          style={{
            color: "currentcolor",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          Moluccus is a leading provider of software development services. We
          offer a wide range of services, including custom software development,
          frontend UI/UX design, backend development, template development,
          mobile, desktop, and web development, tutorials and resources,
          artificial intelligence solutions, and e-commerce development. <br />
          <br />
          We are a team of experienced and passionate developers who are
          committed to providing our clients with the highest quality services.
          We understand that every project is different, and we tailor our
          approach to meet the specific needs of each client.
          <br />
          <br />
          We are proud of our work, and we are confident that we can help you
          achieve your goals. Contact us today to learn more about how we can
          help you with your software development needs.
        </h5>
      </div>

      {/** Collaborations */}
      <div className="hidden grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-3 lg:mr-48 lg:ml-48">
        <button
          className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          type="button"
          role="button"
        >
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
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
            <p className="text-base font-semibold">Open Collective</p>
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
              Sponsor the NextUI maintainers.
            </p>
          </div>
        </button>

        <button
          className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          type="button"
          role="button"
        >
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
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
            <p className="text-base font-semibold">Patreon</p>
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
              Sponsor the creator, Junior Garcia.
            </p>
          </div>
        </button>

        <button
          className="flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          type="button"
          role="button"
        >
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-xl gap-2 pb-0">
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
            <p className="text-base font-semibold">Patreon</p>
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
              Sponsor the creator, Junior Garcia.
            </p>
          </div>
        </button>
      </div>

      {/** Sponsers Title*/}
      <div className="text-center md:mt-20">
        <h1
          className="title"
          style={{
            color: "violet",
            fontWeight: "800",
            fontSize: "clamp(25px, 3.125vw, 40px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          WE`RE BACKED BY INCREDIBLE INVESTORS
        </h1>
      </div>

      {/** Sponsers */}
      <div className="justify-items-center justify-center">
        <div className="grid grid-cols-3 gap-1 lg:grid-cols-6 lg:mr-80 lg:ml-80 items-center justify-center justify-items-center">
          {siteConfig.investors.map((item, key) => (
            <Avatar
              key={key}
              src={item.img}
              className="w-20 h-20 text-lg justify-center"
            />
          ))}
        </div>
      </div>

      {/** Individual Title*/}
      <div className="text-center md:mt-20">
        <h1
          className="title"
          style={{
            color: "violet",
            fontWeight: "800",
            fontSize: "clamp(25px, 3.125vw, 40px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          INDIVIDUAL INVESTORS
        </h1>
      </div>

      {/** Individual investors */}
      <div className="justify-items-center justify-center">
        <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 lg:mr-10 lg:ml-10 items-center justify-center justify-items-center">
          {siteConfig.individualinvestors.map((item, key) => (
            <User
              key={key}
              name={item.name}
              description={item.description}
              avatarProps={{
                src: item.img,
              }}
            />
          ))}
        </div>
      </div>

      {/** About Title*/}
      <div className="text-center md:mt-20">
        <h1
          className="title"
          style={{
            color: "violet",
            fontWeight: "800",
            fontSize: "clamp(25px, 3.125vw, 40px)",
            whiteSpace: "pre-wrap",
            transitionTimingFunction: "ease",
            transitionDuration: "0.6s",
            transitionDelay: "0.117391s",
            lineHeight: "1.2em",
            letterSpacing: "-.5px",
            textTransform: "none",
          }}
        >
          ABOUT
        </h1>
      </div>

      <section className="container mt6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-3 justify-items-center">
          <div className="flex card w-50-ns dib flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h2
              className="f5 f4-ns mt2"
              style={{
                color: "violet",
                fontWeight: "800",
                fontSize: "clamp(25px, 3.125vw, 40px)",
                whiteSpace: "pre-wrap",
                transitionTimingFunction: "ease",
                transitionDuration: "0.6s",
                transitionDelay: "0.117391s",
                lineHeight: "1.2em",
                letterSpacing: "-.5px",
                textTransform: "none",
              }}
            >
              Our Mission
            </h2>

            <div>
              <p>
                Our mission is to provide our clients with the highest quality
                software development services. We are committed to working with
                our clients to understand their needs and to develop solutions
                that meet those needs. We are also committed to providing our
                clients with the best possible customer service.
              </p>
            </div>
          </div>

          <div className="card w-50-ns dib flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h2
              className="f5 f4-ns mt2"
              style={{
                color: "violet",
                fontWeight: "800",
                fontSize: "clamp(25px, 3.125vw, 40px)",
                whiteSpace: "pre-wrap",
                transitionTimingFunction: "ease",
                transitionDuration: "0.6s",
                transitionDelay: "0.117391s",
                lineHeight: "1.2em",
                letterSpacing: "-.5px",
                textTransform: "none",
              }}
            >
              Our Values
            </h2>
            <div>
              <ul>
                <li>
                  Quality: We are committed to providing our clients with the
                  highest quality software development services.
                </li>
                <li>
                  Innovation: We are always looking for new ways to improve our
                  services and to meet the needs of our clients.
                </li>
                <li>
                  Collaboration: We believe that the best software is developed
                  through collaboration between our clients and our team.
                </li>
                <li>
                  Communication: We are committed to clear and open
                  communication with our clients.
                </li>
                <li>
                  Customer service: We are committed to providing our clients
                  with the best possible customer service.
                </li>
              </ul>
            </div>
          </div>

          <div className="card w-50-ns dib flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h2
              className="f5 f4-ns mt2"
              style={{
                color: "violet",
                fontWeight: "800",
                fontSize: "clamp(25px, 3.125vw, 40px)",
                whiteSpace: "pre-wrap",
                transitionTimingFunction: "ease",
                transitionDuration: "0.6s",
                transitionDelay: "0.117391s",
                lineHeight: "1.2em",
                letterSpacing: "-.5px",
                textTransform: "none",
              }}
            >
              Our Community
            </h2>
            <div>
              <p
                className="body"
                style={{
                  overflow: "auto",
                  height: "300px",
                  overflowX: "auto",
                }}
              >
                Our team consists of experienced and passionate developers who
                are dedicated to delivering the highest quality services to our
                clients. With a proven track record of success, we are confident
                in our ability to help you achieve your goals.
                <br />
                <br />
                At Moluccus, we strongly believe in inclusivity and embrace
                diversity in all its forms. We welcome individuals regardless of
                their religious beliefs, skin color, location, socioeconomic
                background, physical appearance, sexual orientation, gender, or
                preferences.
                <br />
                <br />
                As the founder of Moluccus, I am committed to upholding these
                values and will not tolerate any form of discrimination within
                our company. If any instances of discrimination are
                substantiated, regardless of the position held, immediate
                termination from the company will be enforced.
                <br /> <br /> Our inclusivity extends to men, women, cisgender
                individuals, transgender individuals, non-binary persons, and
                the entire LGBTQIA+ community.
                <br /> <br /> We believe that a diverse team fosters innovation,
                creativity, and a rich collaborative environment. By embracing
                and celebrating our differences, we create a welcoming space
                where everyone can thrive and contribute their unique
                perspectives.
                <br /> <br /> Thank you for considering Moluccus. We look
                forward to working with you and building a diverse and inclusive
                team that drives success together.
              </p>
            </div>
          </div>

          <div className="card w-50-ns dib flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h2
              className="f5 f4-ns mt2"
              style={{
                color: "violet",
                fontWeight: "800",
                fontSize: "clamp(25px, 3.125vw, 40px)",
                whiteSpace: "pre-wrap",
                transitionTimingFunction: "ease",
                transitionDuration: "0.6s",
                transitionDelay: "0.117391s",
                lineHeight: "1.2em",
                letterSpacing: "-.5px",
                textTransform: "none",
              }}
            >
              Our Clients
            </h2>
            <div>
              <p>
                We have worked with a wide range of clients, freelancing ,
                individuals and opensourcing code. We are proud of our work with
                our clients, and we are confident that we can help you achieve
                your goals.
              </p>
            </div>
          </div>

          <div className="card w-50-ns dib flex flex-col relative overflow-hidden height-auto text-foreground box-border border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background shadow-lg rounded-xl cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-95 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h2
              className="f5 f4-ns mt2"
              style={{
                color: "violet",
                fontWeight: "800",
                fontSize: "clamp(25px, 3.125vw, 40px)",
                whiteSpace: "pre-wrap",
                transitionTimingFunction: "ease",
                transitionDuration: "0.6s",
                transitionDelay: "0.117391s",
                lineHeight: "1.2em",
                letterSpacing: "-.5px",
                textTransform: "none",
              }}
            >
              Contact Us
            </h2>
            <div>
              <p>
                To learn more about our services, please contact us today. We
                would be happy to discuss your needs and to see how we can help
                you achieve your goals.
              </p>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
