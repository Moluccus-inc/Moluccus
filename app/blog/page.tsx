"use client";
import { title } from "@/components/primitives";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { User } from "@nextui-org/user";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { Button } from "@nextui-org/button";

export default function BlogPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("");

  const handleOpen = () => {
    setBackdrop("blur");
    onOpen();
  };

  return (
    <section className="flex flex-col max-w-full items-stretch justify-items-center justify-center gap-4 py-1 md:py-1 h-fit z-0">
      <h1 className={title()}>Blog</h1>

      {/**<div className="flex flex-grid justify-start z-0 hidden">
        <div className="max-w-full mx-auto grid grid-cols-1 grid-rows-12 sm:grid-cols-4 sm:grid-rows-12 gap-2">
          <div className="flex col-span-1 max-w-full">
            <Card className="cursor-pointer" onClick={() => handleOpen()}>
              <Image
                width="100%"
                height="auto"
                onClick={() => handleOpen()}
                className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                alt="alternative"
                src="https://blog.jetbrains.com/wp-content/uploads/2023/05/DSGN-16469-11-01.png"
              />
              <CardBody onClick={() => handleOpen()}>
                <div className="grid grid-cols-1 col-span-full max-w-full">
                  <text
                    className="rainbow-text"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(18px, 3.125vw, 15px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    June 8, 2023
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(24px, 3.125vw, 18px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    Kotlin News: 1.8.20 Release, KotlinConf Keynote
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "300",
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
                    Kotlin 1.8.20, KotlinConf keynote and session recordings,
                    redesigned mascot, and other
                  </text>
                </div>
              </CardBody>

              <CardFooter>
                <div>
                  <User
                    name="Moluccus"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex col-span-1 max-w-full">
            <Card className="cursor-pointer" onClick={() => handleOpen()}>
              <Image
                width="100%"
                height="auto"
                onClick={() => handleOpen()}
                className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                alt="alternative"
                src="https://blog.jetbrains.com/wp-content/uploads/2023/05/DSGN-16469-11-01.png"
              />
              <CardBody onClick={() => handleOpen()}>
                <div className="grid grid-cols-1 col-span-full max-w-full">
                  <text
                    className="rainbow-text"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(18px, 3.125vw, 15px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    June 8, 2023
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(24px, 3.125vw, 18px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    Kotlin News: 1.8.20 Release, KotlinConf Keynote
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "300",
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
                    Kotlin 1.8.20, KotlinConf keynote and session recordings,
                    redesigned mascot, and other
                  </text>
                </div>
              </CardBody>

              <CardFooter>
                <div>
                  <User
                    name="Moluccus"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex col-span-1 max-w-full">
            <Card className="cursor-pointer" onClick={() => handleOpen()}>
              <Image
                width="100%"
                height="auto"
                onClick={() => handleOpen()}
                className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                alt="alternative"
                src="https://blog.jetbrains.com/wp-content/uploads/2023/05/DSGN-16469-11-01.png"
              />
              <CardBody onClick={() => handleOpen()}>
                <div className="grid grid-cols-1 col-span-full max-w-full">
                  <text
                    className="rainbow-text"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(18px, 3.125vw, 15px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    June 8, 2023
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(24px, 3.125vw, 18px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    Kotlin News: 1.8.20 Release, KotlinConf Keynote
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "300",
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
                    Kotlin 1.8.20, KotlinConf keynote and session recordings,
                    redesigned mascot, and other
                  </text>
                </div>
              </CardBody>

              <CardFooter>
                <div>
                  <User
                    name="Moluccus"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex col-span-1 max-w-full">
            <Card className="cursor-pointer" onClick={() => handleOpen()}>
              <Image
                width="100%"
                height="auto"
                onClick={() => handleOpen()}
                className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                alt="alternative"
                src="https://blog.jetbrains.com/wp-content/uploads/2023/05/DSGN-16469-11-01.png"
              />
              <CardBody onClick={() => handleOpen()}>
                <div className="grid grid-cols-1 col-span-full max-w-full">
                  <text
                    className="rainbow-text"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(18px, 3.125vw, 15px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    June 8, 2023
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(24px, 3.125vw, 18px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    Kotlin News: 1.8.20 Release, KotlinConf Keynote
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "300",
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
                    Kotlin 1.8.20, KotlinConf keynote and session recordings,
                    redesigned mascot, and other
                  </text>
                </div>
              </CardBody>

              <CardFooter>
                <div>
                  <User
                    name="Moluccus"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex col-span-1 max-w-full">
            <Card className="cursor-pointer" onClick={() => handleOpen()}>
              <Image
                width="100%"
                height="auto"
                onClick={() => handleOpen()}
                className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                alt="alternative"
                src="https://blog.jetbrains.com/wp-content/uploads/2023/05/DSGN-16469-11-01.png"
              />
              <CardBody onClick={() => handleOpen()}>
                <div className="grid grid-cols-1 col-span-full max-w-full">
                  <text
                    className="rainbow-text"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(18px, 3.125vw, 15px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    June 8, 2023
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "800",
                      fontSize: "clamp(24px, 3.125vw, 18px)",
                      whiteSpace: "pre-wrap",
                      transitionTimingFunction: "ease",
                      transitionDuration: "0.6s",
                      transitionDelay: "0.117391s",
                      lineHeight: "1.2em",
                      letterSpacing: "-.5px",
                      textTransform: "none",
                    }}
                  >
                    Kotlin News: 1.8.20 Release, KotlinConf Keynote
                  </text>

                  <text
                    className="mt-2"
                    style={{
                      fontWeight: "300",
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
                    Kotlin 1.8.20, KotlinConf keynote and session recordings,
                    redesigned mascot, and other
                  </text>
                </div>
              </CardBody>

              <CardFooter>
                <div>
                  <User
                    name="Moluccus"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Modal
        className="rounded-md w-full max-w-full"
        draggable={false}
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        isDismissable={false}
        scrollBehavior="inside"
        size="full"
        style={{
          marginLeft: "10px",
          margin: "10px",
          borderRadius: "20px",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
                  duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                  eiusmod. Et mollit incididunt nisi consectetur esse laborum
                  eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
                  nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed
                  porttitor quam. Magna exercitation reprehenderit magna aute
                  tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
                  mollit incididunt nisi consectetur esse laborum eiusmod
                  pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
                  veniam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
                  duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                  eiusmod. Et mollit incididunt nisi consectetur esse laborum
                  eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
                  nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed
                  porttitor quam. Magna exercitation reprehenderit magna aute
                  tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
                  mollit incididunt nisi consectetur esse laborum eiusmod
                  pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
                  veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

          **/}
    </section>
  );
}
