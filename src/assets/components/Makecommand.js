import { AnimatePresence, motion, transform } from "framer-motion";
import React, { useState } from "react";

const Makecommand = (title, text, img) => {
  const [isLaunchclicked, setisLaunchclicked] = useState(false);
  const clicked = () => setisLaunchclicked(!isLaunchclicked);
  const white = "rgb(255, 255, 255, 1)";
  const black = "rgb(1, 1, 1, 1)";
  const grey = "rgba(60, 60, 60, 0.85)";
  const gold = "rgb(204, 199, 154)";

  const silver = "rgb(191, 200, 208)";

  const orange = "rgb(210, 136, 97)";

  const background = {
    position: "relative",
    background: "url(/img/restaurant11.jpg)",
    backgroundAttachment: "fixed",
    backgroundOrigin: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "500px",
  };

  const ul = {
    position: "absolute",
    top: "85%",
    background: grey,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "50%",
    padding: "30px",
  };

  const TitleStyle = { color: silver, fontSize: "1.3rem" };

  const button = {
    cursor: "pointer",
    padding: "10px",
    width: "50%",
    border: "none",
    fontSize: "1.2rem",
    color: white,
    background: gold,
    transform: "scale(1)",
  };

  const buttonHover = {
    color: gold,
    background: white,
  };

  const buttonTap = {
    transform: "scale(0.9)",
  };

  return (
    <AnimatePresence>
      <motion.div style={background}>
        <motion.ul layoutId={"btnUl"} style={ul}>
          <motion.li style={TitleStyle}>
            LAUNCH YOUR COMMAND RIGHT NOW !!!
          </motion.li>
          <motion.button
            onClick={(e) => clicked()}
            whileHover={buttonHover}
            whileTap={buttonTap}
            style={button}
          >
            To command
          </motion.button>
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Makecommand;
