import React, { useState, useEffect } from "react";
import firstPic from "./images/IMG_2721.jpg";
import widePic from "./images/IMG_2720.jpg";
import secondPic from "./images/IMG_2722.jpg";
import style from "./styles.css";
import Picture from "./Picture_Object";
import styled from "styled-components";
//import popupStyle from "./popUp.css";
import AccountSection from "./AccountSection";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const myScroll = () => {
    setScrollY(window.pageYOffset);
  };
  useEffect(() => {
    const whereIsMouse = () => {
      window.addEventListener("scroll", myScroll);
    };
    whereIsMouse();
    console.log(scrollY);
    return window.removeEventListener("scroll", myScroll);
  });

  let POSITION_VALUE = (1000 / 2 - scrollY) / 1000;

  return (
    <>
      <div style={style}> </div>
      <div style={{ position: "fixed", top: "200px" }}>{scrollY}</div>
      <Picture picnum={firstPic} positionValue={POSITION_VALUE} />
      <Picture picnum={secondPic} positionValue={-POSITION_VALUE} />
      <Picture picnum={widePic} />
      <AccountSection />
    </>
  );
}

export default App;
