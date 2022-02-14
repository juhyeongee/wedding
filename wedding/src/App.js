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
    //return window.removeEventListener("scroll", myScroll);
  });

  let POSITION_VALUE = (1100 / 2 - scrollY) / 1000;
  /////
  ///// Time to make Guest Books
  /////

  const GuestBook_section = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 50vh;
    color: black;
    font-size: 2rem;
  `;

  const Title = styled.text`
    margin: 1rem;
  `;

  const MemoInput = styled.input`
    height: 20vh;
    width: 15vh;
    background-color: cornsilk;
    border: 1px solid black;
  `;

  const SubmitButton = styled.input``;

  const handleTextSubmit = (event) => {
    event.preventDefault();
    const copyText = SubmitButton.value;
  };

  const Memoform = () => {
    return (
      <form>
        <MemoInput type="text" placeholder="leave your message" />
      </form>
    );
  };

  const Memos = styled.div`
    display: flex;
  `;

  const GuestBook = () => {
    const [memo, setMemo] = useState([]);
    //const newMemo =
    //setMemo([...newMemo])
    return (
      <GuestBook_section>
        <Title>Guest Book</Title>
        <Memos>
          <Memoform />
          <Memoform />
          <Memoform />
          <Memoform />
        </Memos>
      </GuestBook_section>
    );
  };

  ///// 포토북 위에
  ///// 지도 (찾아오시는 길)

  return (
    <>
      <div style={style}> </div>
      <div style={{ position: "fixed", top: "200px" }}>{scrollY}</div>
      <Picture picnum={firstPic} positionValue={POSITION_VALUE} />
      <Picture picnum={secondPic} positionValue={-POSITION_VALUE} />
      {/*<Picture picnum={widePic} />*/}
      <AccountSection />
      <GuestBook />
    </>
  );
}

export default App;
