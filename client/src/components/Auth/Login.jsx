import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Button from "../shared/Button.jsx";

import Input from "../shared/Input.jsx";

const ContainerLogin = styled.form`
  width: 45%;
  background-color: #46198f53;
  border-radius: 1rem;
  margin: 0 auto;
  padding: 2rem 2rem;
  text-align: center;
`;

const ContainerUsuarioLogin = styled.div`
  display: grid;
  width: 60%;
  margin: 3rem auto;
  justify-content: space-evenly;
`;

const ContainerClaveLogin = styled.div`
  display: grid;
  width: 60%;
  margin: 3rem auto 1.5rem auto;
  justify-content: space-evenly;
`;

const ContainerButtonLogin = styled.div`
  width: 50%;
  padding-top: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerButtonFacebookGoogle = styled.div`
  width: 50%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-evenly;
`;

const ButtonFacebook = styled.div`
  background-color: #166fe5;
  width: 50px;
  border-radius: 0.8rem;
  cursor: pointer;
  height: 45px;
`;

const ButtonGoogle = styled.div`
  background-color: #fafafa;
  border-radius: 0.8rem;
  width: 50px;
  cursor: pointer;
  height: 45px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleUser = (e) => {
    console.log(user);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password).then(
        () => {
          // navigate("/home");
          // window.location.reload();
          console.log('ok')
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <ContainerLogin>
        <h1 style={{ color: "var(--secondFontColor)" }}>Login</h1>
        <ContainerUsuarioLogin>
          <label
            style={{ color: "var(--secondFontColor)", fontSize: "1.1rem" }}
          >
            Correo Electronico
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Ingrese su correo..."
            value={email}
            onChange={handleUser}
            width="270px"
            padding=".6rem"
            height="40px"
          />
        </ContainerUsuarioLogin>
        <ContainerClaveLogin>
          <label
            style={{ color: "var(--secondFontColor)", fontSize: "1.1rem" }}
          >
            Contraseña
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Ingrese su contraseña..."
            value={password}
            onChange={handleUser}
            padding=".6rem"
            width="270px"
            height="40px"
          />
        </ContainerClaveLogin>
        <div><h4 style={{color: 'var(--secondFontColor)'}}>ó logueate con</h4></div>
        <ContainerButtonFacebookGoogle>
          <ButtonFacebook>
            <FaFacebookF
              style={{
                color: "var(--secondFontColor)",
                width: "40px",
                marginTop: "8px",
                height: "28px",
              }}
            />
          </ButtonFacebook>
          <ButtonGoogle>
            <FcGoogle
              style={{ width: "33px", height: "33px", marginTop: "6px" }}
            />
          </ButtonGoogle>
        </ContainerButtonFacebookGoogle>
        <ContainerButtonLogin>
          <Button
            title="INGRESAR"
            padding=".8rem 6.5rem"
            type={"submit"}
            onClick={handleSend}
          />
        </ContainerButtonLogin>
      </ContainerLogin>
    </div>
  );
};

export default Login;
