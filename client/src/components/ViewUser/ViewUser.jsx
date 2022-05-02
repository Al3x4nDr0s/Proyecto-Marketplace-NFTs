import React from "react";
import {
  ContainerHeaderUser,
  ContainerButton,
  ContainerBodyUser,
  ContainerMisDatos,
  ContainerMisPreferencias,
  ListaPreferencias,
  ContenedorUltimasVentas,
  ContainerEliminarUser,
  // ImgPerfil,
  InputData,
  ImagenPerfil
} from "./elements/StyleViewUser.jsx";
// import { CardVenta } from "./CardVenta.jsx";
// import {MisPublicaciones} from './Publicaciones/MisPublicaciones.jsx';
import Input from "../shared/Input.jsx";
import Button from "../shared/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ViewUser = React.memo(() => {
  // const { username, level } = user;

  const user = useSelector((state) => state.user)


  const {username, image} = user

  const navigate = useNavigate()
  return (
    <>
      <ContainerHeaderUser>
        <div style={{ display: "flex" }}>
          <ImagenPerfil background={image} />
          <div>
            <h2>
              {username}
            </h2>
            <p style={{ color: "var(--colorInfo)" }}>
              Calificacion como vendedor - 10/10
            </p>
          </div>
        </div>

        <ContainerButton>
          <Button title="MIS PUBLICACIONES" onClick={() => navigate(`/myprofile/mispublicaciones`)}/>
          <Button title="LOGOUT" />
        </ContainerButton>
      </ContainerHeaderUser>
      <ContainerBodyUser>
        <div>
          <h2>Mis preferencias</h2>
          <ContainerMisPreferencias>
          <h2>In construction</h2>
            {/* <ListaPreferencias> */}
              {/* {user.preferencias.map((x) => (
                <li key={x}>
                  {x} <a>X</a>
                </li>
              ))} */}
            {/* </ListaPreferencias> */}
          </ContainerMisPreferencias>
          <h2 style={{ marginTop: ".8rem" }}>Ultimas ventas</h2>
          <ContenedorUltimasVentas>
            <h2>In construction</h2>
            {/* {user.ultimasventas.map((x) => (
              <CardVenta
                title={x.title.toUpperCase()}
                tiempo={x.tiempo}
                tipo={x.tipo}
              />
            ))} */}
          </ContenedorUltimasVentas>
        </div>
        <div
          style={{ borderLeft: "1px solid var(--mainBackGroundButtonColor)" }}
        >
          <ContainerMisDatos>
            <h2>Mis datos</h2>
            <div
              style={{
                display: "grid",
                fontSize: "1.2rem",
                marginBottom: ".8rem",
              }}
            >
              <label>Username</label>
              <InputData>
                <Input type="text" placeholder="username" height="32px" padding=".4rem" width="12rem"/>
                <Button title="CAMBIAR USUARIO" padding=".28rem 1.8rem" margin="0"></Button>
              </InputData>
            </div>
            <div
              style={{
                display: "grid",
                fontSize: "1.2rem",
                margin: ".8rem auto",
              }}
            >
              <label>Passoword</label>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".6rem"}}
              >
                <Input type="text" placeholder="*************" height="32px" padding=".4rem" width="12rem" />
                <Button title="CAMBIAR CLAVE" padding=".25rem 2rem" margin="0 .42rem"></Button>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                fontSize: "1.2rem",
                margin: ".8rem auto",
              }}
            >
              <label>Mobil</label>
              <Input type="text" placeholder="+54 387 65678904" height="32px" padding=".4rem" width="12rem" />
            </div>
          </ContainerMisDatos>
          <ContainerEliminarUser>
            <Button title="ELIMINAR CUENTA" color="var(--colorError)"></Button>
          </ContainerEliminarUser>
        </div>
      </ContainerBodyUser>
    </>
  );
});
