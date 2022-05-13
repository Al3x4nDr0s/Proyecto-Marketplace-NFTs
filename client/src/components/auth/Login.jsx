import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import authService from '../../services/authService';
import styled from 'styled-components';

const ContainerLogin = styled.div`
width: 75%;
margin: 0 auto;

`

const Login = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    const handleUser = (e) => {
        console.log(user)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            await authService.login(email, password).then(() => {
                navigate("/home")
                window.location.reload();
            },
            (error) => {
                console.log(error);
            }
          );
        } catch (error) {
            console.log(error);
            navigate("/register");
            window.location.reload();
        };
    };

  return (
    <ContainerLogin>
        <form>
        <label>Correo</label>
            <input 
            type={"email"}
            name={"email"}
            placeholder={"Ingresa Tu Correo Electronico"}
            value={email}
            onChange={handleUser}
            />
            <label>Contraseña</label>
            <input 
            type={"password"}
            name={"password"}
            placeholder={"Ingresa Tu Correo Contraseña"}
            value={password}
            onChange={handleUser}
            />
            <button
            type={'submit'}
            onClick={handleSend}
            >Ingresar</button>
        </form>
    </ContainerLogin>
  )
}

export default Login;