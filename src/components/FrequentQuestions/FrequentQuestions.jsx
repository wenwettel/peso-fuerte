import SmallCard from "components/SmallCard";
import FrequentQuestionsStyle from "./FrequentQuestionsStyle";
import rocket from "images/rocket.png";
import coin from "images/coin.png";
import exchange from "images/exchange.png";
import book from "images/book.png";
import { H3, P1, colors } from "styled";

const FrequentQuestions = () => {
  return (
    <FrequentQuestionsStyle>
      <div className="container">
        <H3>¿Tenés dudas?</H3>
        <P1 color={colors.black80}>Consultá nuestras preguntas frecuentes:</P1>
        <div className="container-card">
          <SmallCard img={rocket} text="Sobre el programa" alt="rocket" />
          <SmallCard img={coin} text="Sobre el Peso Fuerte" alt="coin" />
          <SmallCard
            img={exchange}
            text="Sobre el uso del Peso Fuerte"
            alt="exchange"
          />
          <SmallCard img={book} text="Términos y condiciones" alt="book" />
        </div>
      </div>
    </FrequentQuestionsStyle>
  );
};

export default FrequentQuestions;
