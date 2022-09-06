import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          {" "}
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          {" "}
          El precio mas alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          {" "}
          El precio mas bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          {" "}
          Variación de las últimas 24 hs: <span>{CHANGEPCT24HOUR}%</span>
        </Texto>
        <Texto>
          {" "}
          Ultima actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
