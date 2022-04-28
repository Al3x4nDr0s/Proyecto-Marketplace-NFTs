import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import authService from '../../services/authService';

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
        };
    };

  return (
    <div>
        <form>
        <label>Correo Electronico</label>
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
            value={password}
            onChange={handleUser}
            />
            <button
            type={'submit'}
            onClick={handleSend}
            >Ingresar</button>
        </form>
    </div>
  )
}

export default Login;