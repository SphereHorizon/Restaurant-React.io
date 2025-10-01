import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Phoneingredient = () => {
  const [isActive, setisActive] = useState("Tomato");

  const allIngredient = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
  ];

  // CSS styles start
  const grey = "rgba(143, 140, 140, 1)";

  const white = "rgba(255, 255, 255, 1)";

  const blue = "rgba(63, 67, 201, 1)";

  const underline = {
    position: "absolute",
    width: "100%",
    height: "3px",
    color: blue,
    background: blue,
    transform: "translateX(0%)",
    top: "100%",
    left: "0",
  };

  const iconContainer = {
    color: "black",
    background: white,
    width: "100%",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const icon = {
    fontSize: "10rem",
  };

  // CSS styles end

  return (
    <div>
      <AnimatePresence>
        <motion.ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* img start */}
          <motion.li>
            <motion.img
              layout
              src="/img/Iphone.png"
              style={{ height: "600px", width: "400px" }}
              initial={{ opacity: 0, transform: "translateX(-100%)" }}
              whileInView={{ opacity: 1, transform: "translateX(0%)" }}
              transition={{ duration: 1.5 }}
            ></motion.img>
          </motion.li>
          {/* img end */}

          {/* array start */}

          <motion.ul
            initial={{ opacity: 0, transform: "scale(0)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: 2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* nav */}
            <motion.ul style={{ display: "flex" }}>
              {allIngredient.map((ingredient, index) => (
                <motion.li
                  key={index}
                  className={isActive === ingredient.label ? "isActives" : ""}
                  onClick={(e) => setisActive(ingredient.label)}
                  style={{
                    position:
                      isActive === ingredient.label ? "relative" : "initial",
                    cursor: "pointer",
                    color: "black",
                    padding: "5px",
                    background: white,
                  }}
                  whileHover={{ background: grey }}
                >
                  {ingredient.icon} {ingredient.label}
                  {isActive === ingredient.label && (
                    <motion.div
                      layoutId="underline"
                      layout
                      style={underline}
                    ></motion.div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
            {/* iconDisplay */}
            <motion.li style={iconContainer}>
              {allIngredient.map(
                (ingredient, index) =>
                  isActive === ingredient.label && (
                    <motion.p
                      key={index}
                      layoutId="ingredient"
                      layout
                      style={icon}
                      initial={{ opacity: 0, transform: "translateY(-20%)" }}
                      animate={{ opacity: 1, transform: "translateY(0%)" }}
                    >
                      {
                        allIngredient.find(
                          (ingredient) => ingredient.label === isActive
                        ).icon
                      }
                    </motion.p>
                  )
              )}
            </motion.li>
          </motion.ul>

          {/* array end  */}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default Phoneingredient;
