import React, { useState, useEffect } from "react";
import firstPic from "./images/IMG_2721.jpg";
import widePic from "./images/IMG_2720.jpg";
import secondPic from "./images/IMG_2722.jpg";
import style from "./styles.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const myScroll = () => {
    setScrollY(window.pageYOffset);
  };
  //useEffect(() => console.log(scrollY), [scrollY]);
  useEffect(() => {
    const whereIsMouse = () => {
      window.addEventListener("scroll", myScroll);
    };
    whereIsMouse();
    console.log(scrollY);
    return window.removeEventListener("scroll", myScroll);
    //오우..  리턴이었네..
  });
  /* const Picture1 = () => (
    <div>
      <img src={firstPic} width="390px" height="780px" />
    </div>
  );
  //const Picture2 = () => <img src={secondPic} width="390px" height="780px" />;
  const Picture3 = () => <img src={widePic} width="280px" height="200px" />;
  //const Picture2 = new Picture(secondPic);
*/

  let positionValue = (1000 / 2 - scrollY) / 1000;

  function Picture(props) {
    return (
      <div style={style}>
        <img
          style={{ opacity: props.positionValue }}
          src={props.picnum}
          width="390px"
          height="780px"
        />
      </div>
    );
  }

  return (
    <>
      <div style={style}> </div>
      <div style={{ position: "fixed", top: "200px" }}>{scrollY}</div>
      <Picture picnum={firstPic} positionValue={positionValue} />
      <Picture picnum={secondPic} positionValue={-positionValue} />
      <Picture picnum={widePic} />
    </>
  );
}

export default App;
