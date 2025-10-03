import React, { useEffect, useState } from "react";
import Navigator from "./Navigator";
import { motion, AnimatePresence } from "framer-motion";
import { title } from "framer-motion/client";

const HeaderHome = () => {
  const [radionum, setradionum] = useState("radio1");

  const [IsCarrouselInView, setIsCarrouselInView] = useState(
    window.innerHeight < 471
  );

  const [Dish, setDish] = useState(null);
  const resetDish = () => setDish(null);

  const [isMobile, setisMobile] = useState(window.innerWidth < 968);

  useEffect(() => {
    const handleResize = (e) => {
      requestAnimationFrame(() => {
        // BEST PRACTICE
        setisMobile(window.innerWidth < 968);
      });
    };

    const view = (e) => {
      requestAnimationFrame(() => {
        setIsCarrouselInView(window.innerHeight > 471);
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", view);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", view);
    };
  }, []);

  const radioBackground = [
    {
      Id: "radio1",
      img: "/img/radio1.jpg",
    },
    {
      Id: "radio2",
      img: "/img/radio2.jpg",
    },
    {
      Id: "radio3",
      img: "/img/radio3.jpg",
    },
    {
      Id: "radio4",
      img: "/img/radio4.jpg",
    },
  ];

  const meals = [
    {
      id: "dish1",
      img: "/img/restaurant6.jpg",
      title: "Mixed Grill Platter",
      description: "Assortment of grilled meats served with naan and chutney",
      areas: "a",
    },
    {
      id: "dish2",
      img: "/img/restaurant3.jpg",
      title: "Dal Makhani",
      description: "Lentils and caraway seeds",
      areas: "b",
    },
    {
      id: "dish3",
      img: "/img/PakistanImg4.jpeg",
      title: "Pizzan",
      description: "lorem ipsum dolor sit amet",
      areas: "c",
    },
    {
      id: "dish4",
      img: "/img/PakistanImg5.jpg",
      title: "Biryani",
      description: "Rice with meat and different spices",
      areas: "d",
    },
    {
      id: "dish5",
      img: "/img/restaurant10.jpg",
      title: "Nihari",
      description: " Slow-cooked beef stew with spices",
      areas: "e",
    },
    {
      id: "dish6",
      img: "/img/restaurant5.jpg",
      title: "Pakistani Samosa",
      description: "Fried pastry with meat or vegetables",
      areas: "f",
    },
  ];

  useEffect(() => {
    let index = 0;

    const autoRadio = () => {
      if (index < radioBackground.length - 1) {
        index++;
        setradionum(radioBackground[index].Id);
      } else {
        index = 0;
        setradionum(radioBackground[index].Id);
      }
      console.log(radionum);
    };

    const interval = setInterval(autoRadio, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="Header"
      style={{ overflowX: "hidden", marginBottom: "100px" }}
    >
      <Navigator></Navigator>

      {/* carrousel start */}
      <AnimatePresence>
        <motion.div
          id="carroussel"
          style={{
            position: "relative",
            overflow: "hidden",
            zIndex: 10,
            background: "rgb(21, 21, 21)",
            marginBottom: "100px",
          }}
        >
          <AnimatePresence mode="wait">
            {radioBackground.map(
              (element) =>
                element.Id === radionum && (
                  <motion.div
                    viw
                    key={element.Id}
                    initial={{ opacity: 0, transform: "translate(100vw)" }}
                    animate={{ opacity: 1, transform: "translate(0px, 0px)" }}
                    exit={{ opacity: 0, transform: "translateX(-100vw)" }}
                    transition={{ duration: 0.4 }}
                    style={{
                      background: `url(${element.img})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100vw",
                      height: "100vh",
                    }}
                  ></motion.div>
                )
            )}
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              layout
              id="container"
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "50%",
              }}
              animate={{
                left:
                  radionum === "radio1" && !isMobile
                    ? "23%"
                    : radionum === "radio3" && !isMobile
                    ? "73%"
                    : "50%",
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.ul id="title">
                <li>
                  <p style={{ fontSize: "1.4rem" }}>Take your flight to</p>
                </li>
                <li>
                  <h1>Food World</h1>
                </li>
              </motion.ul>

              <motion.ul id="radio">
                {radioBackground.map((element, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      className="radioBtn"
                      name="radio-btn"
                      id={element.Id}
                      onChange={(e) => {
                        setradionum(e.target.id);
                      }}
                      checked={radionum === element.Id}
                    />
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      {/* carrousel end */}

      {/* meals part start */}
      <AnimatePresence mode="wait">
        <motion.div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {meals.map((meal, index) =>
            Dish !== meal.id ? (
              <motion.ul
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  flex: " 1 1 300px",
                  height: "200px",
                  maxWidth: "400px",
                  background: `url(${meal.img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  gridArea: "",
                }}
                layoutId={meal.id}
                key={meal.id}
                onClick={() => setDish(meal.id)}
                layout
                initial={{ opacity: 0, transform: " translateX(-100px)" }}
                whileInView={{ opacity: 1, transform: " translateX(0px)" }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0 }}
              >
                <motion.ul
                  layoutId={meal.id}
                  layout
                  style={{
                    textAlign: "center",
                    borderRadius: "20px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  initial={{
                    opacity: 0,
                    transform: "scale(0.8)",
                    background: "none",
                  }}
                  whileHover={{
                    opacity: 1,
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(3px)",
                    transform: "scale(1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <li>
                    <h3 style={{ color: "rgb(191, 200, 208)" }}>
                      Title : {meal.title}
                    </h3>
                  </li>
                  <li>
                    <p>Description : {meal.description}</p>
                  </li>
                </motion.ul>
              </motion.ul>
            ) : (
              <motion.ul
                onClick={() => resetDish()}
                layoutId={meal.id}
                style={{
                  zIndex: "2000",
                  cursor: "pointer",
                  borderRadius: "20px",
                  margin: "20px auto",
                  background: "rgba(60, 58, 58, 0.95)",
                  backdropFilter: "blur(1px)",
                  position: "fixed",
                  top: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "90%",
                  height: "90%",
                }}
                initial={{ opacity: 0, transform: "scale(0.8)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                exit={{ opacity: 0, transform: "scale(0.8)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "800px",
                  }}
                  src={meal.img}
                ></motion.img>
                <li
                  style={{
                    width: "100%",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      color: "rgb(191, 200, 208)",
                    }}
                  >
                    Title : {meal.title}
                  </h3>
                  <p>Description : {meal.description}</p>
                </li>
              </motion.ul>
            )
          )}
        </motion.div>
      </AnimatePresence>
      {/* meals part end */}
    </div>
  );
};

export default HeaderHome;
