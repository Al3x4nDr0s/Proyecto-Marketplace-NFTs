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
} from "./elements/StyleViewUser.jsx";
import { CardVenta } from "./CardVenta.jsx";
import Input from "../shared/Input.jsx";
// import {Link} from 'react-router-dom'
import Button from "../shared/Button.jsx";

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
  return (
    <>
      <ContainerHeaderUser>
        <div style={{ display: "flex" }}>
          <ImgPerfil></ImgPerfil>
          <div>
          <h2>
            {username} - Level {level}
          </h2>
          <p style={{color: "var(--colorInfo)"}}>Calificacion como vendedor - 10/10</p>
          </div>
        </div>

        <ContainerButton>
          <Button title="MIS PUBLICACIONES" />
          <Button title="LOGOUT" />
        </ContainerButton>
      </ContainerHeaderUser>
      <ContainerBodyUser>
        <div>
          <h2>Mis preferencias</h2>
          <ContainerMisPreferencias>
            <ListaPreferencias>
              {user.preferencias.map((x) => (
                <li>
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
                marginTop: ".5rem",
              }}
            >
              <label>Usuario</label>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".6rem" }}
              >
                <Input type="text" placeholder={user.username} />
                <Button title="CAMBIAR USUARIO" padding=".25rem 2rem"></Button>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                fontSize: "1.2rem",
                marginTop: ".5rem",
              }}
            >
              <label>Clave</label>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".6rem" }}
              >
                <Input type="text" placeholder="*************" />
                <Button title="CAMBIAR CLAVE" padding=".25rem 2rem"></Button>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                fontSize: "1.2rem",
                marginTop: ".5rem",
              }}
            >
              <label>Numero celular</label>
              <Input type="text" placeholder="+54 387 65678904" />
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
