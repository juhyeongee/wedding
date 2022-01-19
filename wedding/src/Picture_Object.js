import style from "./styles.css";

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
} /* const Picture1 = () => (
    <div>
      <img src={firstPic} width="390px" height="780px" />
    </div>
  );
  //const Picture2 = () => <img src={secondPic} width="390px" height="780px" />;
  const Picture3 = () => <img src={widePic} width="280px" height="200px" />;
  //const Picture2 = new Picture(secondPic);
*/

export default Picture;
