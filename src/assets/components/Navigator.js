import React, { useEffect, useRef, useState } from "react";

import { NavLink } from "react-router-dom";

import { MdContactPhone } from "react-icons/md";

import { RiFilePaper2Line } from "react-icons/ri";

import { FaBlog, FaHome, FaTicketAlt } from "react-icons/fa";

import { LuContactRound } from "react-icons/lu";

import { useHover } from "@uidotdev/usehooks";

import { IoRestaurant } from "react-icons/io5";

import { BiHomeSmile, BiRestaurant, BiSolidConversation } from "react-icons/bi";

import { motion, AnimatePresence } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";

const Navigator = () => {
  //
  // isResize?
  const [isMobile, setisMobile] = useState(window.innerWidth < 968);

  const [windowWidth, setwindowWidth] = useState();

  // isScrolling?

  const [scroll, setscroll] = useState(0);

  const [isScrolling, setisScrolling] = useState();

  // IsHover ?
  const [Homeref, isHomeHovering] = useHover();

  const [Mealsref, isMealsHovering] = useHover();

  const [Reservationsref, isReservationHovering] = useHover();

  const [Blogref, isBlogHovering] = useHover();

  const [Aboutref, isAboutHovering] = useHover();

  const [Contactref, isContactHovering] = useHover();

  const [Imgref, isImgHovering] = useHover();

  // resize event
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setwindowWidth(width);
      console.log(width);

      setisMobile(width < 968);
    };

    const scrollY = (e) => {
      const y = window.scrollY;
      console.log(y);

      setscroll(y);
      setisScrolling(y > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", scrollY);
    // remove when the component is unmouts ( when it disappears)
    return () => {
      window.removeEventListener("scroll", scrollY);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Left = [
    ["Home", "/", Homeref, isHomeHovering, BiHomeSmile, FaHome],
    ["Meals", "/meals", Mealsref, isMealsHovering, BiRestaurant, IoRestaurant],
    [
      "Reservation",
      "/reservation",
      Reservationsref,
      isReservationHovering,
      FaTicketAlt,
      RiFilePaper2Line,
    ],
  ];

  const Right = [
    [
      "Blog",
      "/blog",
      Blogref,
      isBlogHovering,
      BiSolidConversation,
      FaBlog,
      "Blog",
    ],
    [
      "About",
      "/about",
      Aboutref,
      isAboutHovering,
      FaPeopleGroup,
      BsFillPeopleFill,
    ],

    [
      "Contact",
      "/contact",
      Contactref,
      isContactHovering,
      LuContactRound,
      MdContactPhone,
    ],
  ];

  const HoverTranstion = (ref, isTheTypeHovering, Key1, Key2, name) => {
    return (
      <li ref={ref}>
        {isMobile ? (
          <i>
            <AnimatePresence mode="wait">
              {isTheTypeHovering ? (
                <motion.span
                  key={Key1}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    color: "rgb(191, 200, 208)",
                  }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Key1 />
                </motion.span>
              ) : (
                <motion.span
                  key={Key2}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    color: "rgb(204, 199, 154)",
                  }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Key2 />
                </motion.span>
              )}
            </AnimatePresence>
          </i>
        ) : (
          <p>{name}</p>
        )}
      </li>
    );
  };

  const ImgHover = () => {
    return (
      <span ref={Imgref}>
        <AnimatePresence mode="wait">
          {isImgHovering ? (
            <motion.img
              key={"before"}
              src="/img/Pakistan_sLogoHover.png"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              alt=""
            ></motion.img>
          ) : (
            <motion.img
              key={"after"}
              src="/img/Pakistan'sLogoRemove.png"
              alt=""
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            ></motion.img>
          )}
        </AnimatePresence>
      </span>
    );
  };

  return (
    <div
      className="navigator"
      style={{
        transition: "0.2s",
        position: "fixed",
        width: "100%",
        bottom: isMobile ? "0" : "auto",
        backdropFilter: isScrolling ? "blur(6px)" : "none",
        background: isScrolling ? "rgba(0, 0, 0, 0.3" : "",
      }}
    >
      <div id="LeftNav">
        <ul>
          {Left.map((link, index) => (
            <NavLink
              key={index}
              id={link[0]}
              to={link[1]}
              className={(navlink) => (navlink.isActive ? "isActiveStyle" : "")}
            >
              {HoverTranstion(link[2], link[3], link[4], link[5], link[0])}
            </NavLink>
          ))}
        </ul>
      </div>

      {ImgHover()}

      <div id="RightNav">
        <ul>
          {Right.map((link, index) => (
            <NavLink
              key={index}
              id={link[0]}
              to={link[1]}
              className={(navlink) => (navlink.isActive ? "isActiveStyle" : "")}
            >
              {HoverTranstion(link[2], link[3], link[4], link[5], link[0])}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigator;
