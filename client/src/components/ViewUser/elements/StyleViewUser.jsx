import styled from "styled-components";

export const ContainerHeaderUser = styled.div`
  width: 85%;
  border-bottom: 1px solid var(--mainBackGroundButtonColor);
  color: var(--secondFontColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1px auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  @media (max-width: 1600px) {
    width: 29%;
  }
  @media (max-width: 1400px) {
    width: 35%;
  }
  @media (max-width: 1300px) {
    width: 38%;
  }
`;

export const ContainerBodyUser = styled.div`
  width: 85%;
  margin: 1.5rem auto;
  color: var(--secondFontColor);
  display: grid;
  grid-template-columns: 23% 77%;
  @media (max-width: 1600px) {
    grid-template-columns: 28% 72%;
  }
  @media (max-width: 1400px) {
    grid-template-columns: 32% 68%;
  }
  @media (max-width: 1300px) {
    grid-template-columns: 35% 65%;
  }
`;

export const ContainerMisPreferencias = styled.div`
  /* background-color: #31313145; */
  background-color: #50505068;
  /* background-color: var(--mainContainersColor); */
  margin-top: 0.5rem;
  width: 92%;
  border-radius: 0.6rem;
  padding: 1.5rem;
`;

export const ContainerMisDatos = styled.div`
  margin-left: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--mainBackGroundButtonColor);
`;

export const ContainerEliminarUser = styled.div`
  margin-left: 1.2rem;
  margin-top: 1.2rem;
`;

export const ListaPreferencias = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 0 0 0 1.2rem;
  li {
    margin-left: 20px;
    font-size: 1.4rem;

    a {
      cursor: pointer;
      color: var(--mainBackGroundButtonColor);
      /* color: rgba(65, 17, 135); */
      font-weight: 700;
    }
  }
`;

export const ContenedorUltimasVentas = styled.div`
  /* background-color: #31313145; */
  background-color: #50505068;
  /* background-color: var(--mainContainersColor); */
  border-radius: 0.6rem;
  width: 92%;
  padding: 1.5rem;
  margin-top: 0.5rem;
`;

export const UltimasVentas = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  margin: 8px auto;
`;

export const ImgNft = styled.div`
  content:"";
  background: var(--colorInfo);
  height: 85px;
  margin-right: 10px;
  border-radius: .8rem;
  width: 85px;
`;

const ImgPerfil = styled.div`
  /* content:""; */
  /* background: ${(props) => `url(${props.backgroundImage}` || "var(--colorInfo)"}; */
  background-image: ${(props) => `url(${props.background})`};
  /* background-image: url(${props => props.backgroundImage}); */
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1.2px solid var(--mainBackGroundButtonColor);
  width: 60px;
`;

export const ImagenPerfil = (props) => {
  const {background} = props

  console.log(background)
  return (
    <ImgPerfil background={background}/>
  )
}

export const InputData = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
`;