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
  ImgPerfil,
  InputData
} from "./elements/StyleViewUser.jsx";
import { CardVenta } from "./CardVenta.jsx";
import {MisPublicaciones} from './Publicaciones/MisPublicaciones.jsx';
import Input from "../shared/Input.jsx";
import Button from "../shared/Button.jsx";
import { useNavigate, Link } from "react-router-dom";

const user = {
  username: "TheKing",
  level: 4,
  preferencias: ["gaming", "music", "deporte", "shoes", "arte"],
  ultimasventas: [
    {
      title: "e-sport nft",
      tiempo: "hace 9 minutos",
      tipo: "venta",
    },
    {
      title: "retro-psn",
      tiempo: "hace 28 minutos",
      tipo: "venta",
    },
    {
      title: "xbox-s",
      tiempo: "hace 45 minutos",
      tipo: "subasta",
    },
  ],
};

export const ViewUser = () => {
  const { username, level } = user;

  const navigate = useNavigate()
  return (
    <>
      <ContainerHeaderUser>
        <div style={{ display: "flex" }}>
          <ImgPerfil></ImgPerfil>
          <div>
            <h2>
              {username} - Level {level}
            </h2>
            <p style={{ color: "var(--colorInfo)" }}>
              Calificacion como vendedor - 10/10
            </p>
          </div>
        </div>

        <ContainerButton>
          <Button title="MIS PUBLICACIONES" onClick={() => navigate(`/myprofile/mispublicaciones`)}/>
          {/* <Link to={`/myprofile/mispublicaciones`}>MIS PUBLICACIONES</Link> */}
          <Button title="LOGOUT" />
        </ContainerButton>
      </ContainerHeaderUser>
      <ContainerBodyUser>
        <div>
          <h2>Mis preferencias</h2>
          <ContainerMisPreferencias>
            <ListaPreferencias>
              {user.preferencias.map((x) => (
                <li key={x}>
                  {x} <a>X</a>
                </li>
              ))}
            </ListaPreferencias>
          </ContainerMisPreferencias>
          <h2 style={{ marginTop: ".8rem" }}>Ultimas ventas</h2>
          <ContenedorUltimasVentas>
            {user.ultimasventas.map((x) => (
              <CardVenta
                title={x.title.toUpperCase()}
                tiempo={x.tiempo}
                tipo={x.tipo}
              />
            ))}
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
              <label>Usuario</label>
              <InputData>
                <Input type="text" placeholder={user.username} height="32px" padding=".4rem" width="12rem"/>
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
              <label>Clave</label>
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
              <label>Numero celular</label>
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
};
