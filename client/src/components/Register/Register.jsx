import Input from "../shared/Input.jsx";
import Button from "../shared/Button.jsx";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import React, { useState } from "react";

export const Register = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [dataBack, setDataBack] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log("Entramos a HandleChange");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users/", input)
      .then((res) => console.log(res))
      .catch((e) => {
        console.log(e.response.data);
        alert(e.response.data.msg);
      });
  };

  const handleOnBlur = (e) => {
    if (e.target.value === "") {
      setErrors({
        ...errors,
        [e.target.name]: `* ${e.target.name}: Can't be null`,
      });
    } else if (e.target.name === "firstName" || e.target.name === "lastName") {
      /[0-9]/.test(e.target.value)
        ? setErrors({ ...errors, [e.target.name]: "* Not valid name" })
        : setErrors({ ...errors, [e.target.name]: "" });
    } else if (e.target.name === "username") {
      /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/g.test(e.target.value)
        ? setErrors({ ...errors, [e.target.name]: "" })
        : setErrors({ ...errors, [e.target.name]: "* Not valid nickname" });
    } else if (e.target.name === "email") {
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        e.target.value
      )
        ? setErrors({ ...errors, [e.target.name]: "" })
        : setErrors({ ...errors, [e.target.name]: "* Not valid email" });
    } else if (e.target.name === "phone") {
      /[a-z A-Z]/.test(e.target.value)
        ? setErrors({ ...errors, [e.target.name]: "* Not valid phone" })
        : setErrors({ ...errors, [e.target.name]: "" });
    } else if (e.target.name === "password") {
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
        e.target.value
      )
        ? setErrors({ ...errors, [e.target.name]: "" })
        : setErrors({
            ...errors,
            [e.target
              .name]: `* ${e.target.name}: At least 7 to 15 Character, One digit and One Special Character`,
          });
    }
  };

  return (
    <>
      <FormContainer>
        <FormTitle>REGISTER</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormColumn>
            <FormRow>
              <FormItem>
                <Label>FirstName</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={input.firstName}
                  placeHolder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  width="100%"
                />
              </FormItem>
              <FormItem>
                <Label>LastName</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={input.lastName}
                  placeHolder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  width="100%"
                />
              </FormItem>
            </FormRow>
            <FormRow>
              <FormItem>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={input.username}
                  placeHolder="Enter your Username"
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  width="100%"
                />
              </FormItem>
              <FormItem>
                <Label>Email</Label>
                <Input
                  name="email"
                  value={input.email}
                  placeHolder="Enter your email"
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  width="100%"
                />
              </FormItem>
            </FormRow>
            <FormRow>
              <FormItem>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={input.password}
                  placeHolder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  width="100%"
                />
              </FormItem>

              <FormItem>
                <Label>Phone</Label>
                <Input
                  name="phone"
                  value={input.phone}
                  placeHolder="Enter your phone number"
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  width="100%"
                />
              </FormItem>
            </FormRow>
          
            <FormRow>
              <FormAccept>
                <input type="checkbox" />
                <Label>Accepto Terminos y Condiciones</Label>
              </FormAccept>
            </FormRow>
            
          
          <FormIcons>
            <FcGoogle size="2em" />
            <BsFacebook size="2em" color="#4267B2" />
            </FormIcons>
          <FormIcons>
            <Button onClick={handleClick}width="15%" title="Back">
              Back
            </Button>
            

            <Button width="15%" title="Register">
              Register
            </Button>
          </FormIcons>
          </FormColumn>
        </Form>
      </FormContainer>

      <MsgError>{errors.firstName}</MsgError>
      <MsgError>{errors.lastName}</MsgError>
      <MsgError>{errors.username}</MsgError>
      <MsgError>{errors.email}</MsgError>
      <MsgError>{errors.password}</MsgError>
      <MsgError>{errors.phone}</MsgError>
    </>
  );
};

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

const Label = styled.label`
  color: var(--secondFontColor);
  font-size: var(--medium);
  padding: 0px;
  min-height: 10px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0% 5% 0% 5%;
  padding: 0;
  border: none;
  height: 60px;
`;


const FormColumn = styled.div`
  margin-right: 4%;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3%;
  padding: 0;
  margin-bottom: 3%;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const FormIcons = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  padding: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const FormTitle = styled.div`
  text-align: center;
  font-size: var(--large);
  color: var(--secondFontColor);
`;

const FormContainer = styled.div`
  background-color: #3d2556;
  border-radius: 5px;
  margin: 5% 25% 0% 25%;
  padding: 2% 2%;
`;

const FormAccept = styled.div`
  text-align: center;
  margin: 10;
  gap: 5%;
`;

const MsgError = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: ${colores.error};
  width: 100%;
  text-align: center;
`;

/*Salida del Componente
{ 
    name
    nickname
    email
    password
    phone
}
*/
