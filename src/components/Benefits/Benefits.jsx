import TextImage from "components/TextImage";
import searchBusinesses from "images/search-businesses.png";
import usePoints from "images/use-points.png";
import addPoints from "images/add-points.png";
import recordKeeping from "images/record-keeping.png";
import { H1, P1, colors, SecondaryButton } from "styled";
import BenefitsStyle from "./BenefitsStyle";
// eslint-disable-next-line no-unused-vars
import styled from "styled-components/macro";

const Benefits = () => {
  return (
    <BenefitsStyle>
      <H1>Ahora sumás beneficios más fácil</H1>
      <P1 color={colors.black60} className="subtitle">
        Crear tu cuenta, es rápido y simple.
      </P1>
      <TextImage
        img={searchBusinesses}
        alt="businesses"
        text="Buscá los comercios adheridos mas cercanos a tu ubicación."
      />
      <TextImage
        img={addPoints}
        alt="add-points"
        text="Realizá tus compras y empezá a sumar Pesos Fuertes."
        reversed
      />
      <SecondaryButton
        css={`
          margin: auto;
          .fas.fa-arrow-down {
            margin-left: 10px;
          }
        `}
      >
        Ver comercios adheridos
        <i className="fas fa-arrow-down"></i>
      </SecondaryButton>
      <TextImage
        img={usePoints}
        alt="use-points"
        text="Utilizá tus Pesos Fuertes acumulados para pagar tus próximas compras."
      />
      <TextImage
        img={recordKeeping}
        alt="record-keeping"
        text="Llevá un registro detallado de toda tu actividad."
        reversed
      />
    </BenefitsStyle>
  );
};

export default Benefits;
