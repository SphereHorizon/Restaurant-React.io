import React, { useEffect, useState } from "react";
import Navigator from "./Navigator";
import { motion, AnimatePresence } from "framer-motion";
import { title } from "framer-motion/client";

const HeaderHome = () => {
  const [radionum, setradionum] = useState("radio1");

  const [Dish, setDish] = useState(null);
  const resetDish = () => setDish(null);

  const [isMobile, setisMobile] = useState(window.innerWidth < 968);

  useEffect(() => {
    const handleResize = (e) => {
      const width = window.innerWidth;
      setisMobile(width < 968);
      console.log(isMobile);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
      <div
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
      </div>
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

//  <motion.div
//           layout
//           className="mealPart"
//           style={{
//             marginTop: "7%",
//             flexWrap: "wrap",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {meals.map((meal, index) => (
//             <motion.ul
//               onClick={(e) => setclickDish(index)}
//               layout
//               id="img"
//               key={index}
//               style={{
//                 // // full screen when click

//                 overflow: clickDish === index ? "hidden" : "initial",
//                 zIndex: clickDish === index ? 100 : "initial",
//                 position: clickDish === index ? "fixed" : "static",
//                 display: clickDish === index ? "grid" : "flex",
//                 flexWrap: clickDish === index ? "nowrap" : "wrap",
//                 flex: clickDish === index ? "initial" : "0 1 300px",
//                 gridTemplateColumns: clickDish === index ? "1fr" : "initial",
//                 gridTemplateRows: clickDish === index ? "70% 30%" : "initial",
//                 // alignItems: clickDish === index ? "center" : "initial",
//                 justifyContent: clickDish === index ? "center" : "initial",
//                 gap: clickDish === index ? "10px" : "initial",
//                 width: clickDish === index ? "auto" : "initial",
//                 height: clickDish === index ? "100%" : "initial",
//                 top: clickDish === index ? "50%" : "initial",
//                 left: clickDish === index ? "50%" : "initial",
//                 transform:
//                   clickDish === index ? "translate(-50%, -50%)" : "initial",
//                 // translate:
//                 //   clickDish === index ? "translate(-50%, -50%)" : "initial",
//                 margin: clickDish === index ? "0" : "10px",
//                 borderRadius: clickDish === index ? "40px" : "1200px",
//                 background:
//                   clickDish === index ? "rgba(51, 51, 51, 0.34)" : "initial",
//                 backdropFilter: clickDish === index ? "blur(3px)" : "initial",
//                 textAlign: "center",
//                 transition: "0.3s",
//               }}
//             >
//               <li>
//                 <img
//                   src={meal.img}
//                   alt=""
//                   style={{
//                     // borderRadius: "15px",
//                     // width: "100%",
//                     // maxWidth: "700px",
//                     // height: "auto",
//                     cursor: "pointer",
//                     borderRadius: "20px",
//                     width: clickDish === index ? "70%" : "40%",
//                     height: clickDish === index ? "100%" : "auto",
//                     maxWidth: clickDish === index ? "initial" : "600px",
//                     minWidth: clickDish === index ? "initial" : "300px",
//                   }}
//                 />
//               </li>
//               {/* full screen */}
//               <li
//                 style={{
//                   background: clickDish === index ? "rgb(11,16,17)" : "initial",
//                   padding: clickDish === index ? "10px" : "0",
//                   width: clickDish === index ? "100%" : "initial",
//                   height: clickDish === index ? "100%" : "initial",
//                 }}
//               >
//                 <h3 style={{ color: "rgb(210, 136, 97)" }}>
//                   Title : {meal.name}
//                 </h3>
//                 {clickDish === index && <p>ingredients : {meal.compos}</p>}
//               </li>
//             </motion.ul>
//           ))}
//         </motion.div>
