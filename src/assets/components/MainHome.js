import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MainHome = () => {
  const allIngredient = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
  ];

  const [isActive, setisActive] = useState(false);
  const activate = () => setisActive(!isActive);
  const balise = document.querySelectorAll("#ing");
  useEffect(() => {}, []);

  return (
    <div>
      <AnimatePresence>
        <motion.ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* img start */}
          <motion.li>
            <motion.img
              layout
              src="/img/Iphone.png"
              style={{ height: "600px", width: "400px" }}
              initial={{ opacity: 0, transform: "translateX(-50%)" }}
              whileInView={{ opacity: 1, transform: "translateX(0%)" }}
              transition={{ duration: 1 }}
            ></motion.img>
          </motion.li>
          {/* img end */}

          {/* array start */}

          <motion.ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.ul style={{ display: "flex" }}>
              {allIngredient.map((ingredient, index) => (
                <motion.li
                  className={{}}
                  id="ing"
                  key={index}
                  style={{
                    color: "black",
                    padding: "3px",
                    background: "white",
                  }}
                >
                  {ingredient.icon} {ingredient.label}
                </motion.li>
              ))}
            </motion.ul>
            <motion.li
              style={{
                color: "black",
                background: "white",
                width: "100%",
                height: "100%",
              }}
            ></motion.li>
          </motion.ul>

          {/* array end  */}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default MainHome;
