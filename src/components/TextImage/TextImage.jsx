import TextImageStyle from "./TextImageStyle.js";
import { P1 } from "styled";

const TextImage = ({ img, text, reversed, alt }) => {
  return (
    <TextImageStyle reversed={reversed}>
      {reversed ? <P1>{text}</P1> : null}
      <div>
        <img src={img} alt={alt} />
      </div>
      {reversed ? null : <P1>{text}</P1>}
    </TextImageStyle>
  );
};

export default TextImage;
