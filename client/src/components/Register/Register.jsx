import Input from "../shared/Input.jsx";
import axios from "axios";
import styled, { css } from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import GoogleLogin from 'react-google-login';


import React, { useState, useEffect } from "react";

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

  
  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useState(false);


  useEffect(()=>{
    if(errors.firstName===''&&errors.lastName===''&&errors.username===''&&errors.email===''&&errors.password===''&&errors.phone===''&&checked
    &&input.firstName!==''&&input.lastName!==''&&input.username!==''&&input.email!==''&&input.password!==''&&input.phone!==''){
      setDisabled(false);
    } else{
      setDisabled(true);
    }
    
  },[input,errors,checked])


  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log("Entramos a HandleChange");
    
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
        : setErrors({ ...errors, [e.target.name]: "* Not valid username" });
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
              .name]: `* 7-15 Char, 1 dig, 1 Spec.Char`,
          });
    }

    

    

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
    
    
  };

  const handleLogin=(googleData)=>{
   
   /* axios
    .post("http://localhost:4000/auth/google",
      {token: googleData.tokenId,
      givenName: googleData.profileObj.givenName,
      familyName: googleData.profileObj.familyName })
      .then((res) => {
        console.log(res.data)
        setLoginData(res.data);
        localStorage.setItem('loginData', JSON.stringify(res.data))
        
      })
      .catch((e) => {
        console.log(e.response.data);
        alert(e.response.data.msg);
      });
      */
      console.log(googleData);
      localStorage.setItem('token',JSON.stringify(googleData));
      navigate("/home");
      
  
 
  };

  const handleFailure=(response)=>{
   
    console.log(response);
  };

  const handleChecked=(e)=>{
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <>
      <FormContainer>
        <FormTitle>
        <h1>REGISTER</h1>
        </FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormColumn>
            <FormRow>
              <FormItem>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={input.firstName}
                  placeHolder="Enter your name"
                  onChange={handleChange}
                  //onBlur={handleOnBlur}
                  width="100%"
                />
                <MsgError>{errors.firstName}</MsgError>
               </FormItem>
              
              <FormItem>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={input.lastName}
                  placeHolder="Enter your name"
                  onChange={handleChange}
                  //onBlur={handleOnBlur}
                  width="100%"
                />
                <MsgError>{errors.lastName}</MsgError>
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
                  //onBlur={handleOnBlur}
                  width="100%"
                />
                <MsgError>{errors.username}</MsgError>
                </FormItem>
              <FormItem>
                <Label>Email</Label>
                <Input
                  name="email"
                  value={input.email}
                  placeHolder="Enter your email"
                  onChange={handleChange}
                  //onBlur={handleOnBlur}
                  width="100%"
                />
                <MsgError>{errors.email}</MsgError>
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
                  //onBlur={handleOnBlur}
                  width="100%"
                />
                <MsgError>{errors.password}</MsgError>
                </FormItem>

              <FormItem>
                <Label>Phone</Label>
                <Input
                  name="phone"
                  value={input.phone}
                  placeHolder="Enter your phone number"
                  onChange={handleChange}
                  //onBlur={handleOnBlur}
                  width="100%"
                />
                <MsgError>{errors.phone}</MsgError>
              </FormItem>
            </FormRow>

            <FormRow>
              <FormAccept>
                <input type="checkbox" name='accept' onChange={handleChecked} />
                <Label style={{marginLeft:"10px"}}>I Agree to Terms and Conditions</Label>
              </FormAccept>
            </FormRow>

            <FormIcons>
            <BotonFacebook>
              <FaFacebookF size="2em" color="white" style={{
                color: "var(--secondFontColor)",
                width: "40px",
                margin:"8px 5px",
                height: "28px",
              }}/>
            </BotonFacebook>
              <GoogleLogin
              clientId="623666465652-gdbjevbm9pvugieks0it5c4hijk97gag.apps.googleusercontent.com"
            
              //buttonText="Login"
              render={renderProps => (
                <BotonGoogle>
                <FcGoogle style={{ width: "33px", height: "33px", margin:"6px 8px"}} onClick={renderProps.onClick} >This is my custom Google button</FcGoogle>
                </BotonGoogle>
              )}
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
              />
              
            </FormIcons>
            <FormIcons>
              <Button1 onClick={handleClick} height="10%" width="25%" title="Back"></Button1>

              <Button1 disabled={disabled} type="submit" height="10%" width="25%" title="Register"></Button1>
              
            </FormIcons>
          </FormColumn>
        </Form>
      </FormContainer>

      
      
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
  font-size: 1.1rem;
  padding: 0px;
  min-height: 10px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0% 5% 0% 5%;
  padding: 0;
  border: none;
  height: 90px;
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

const FormIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
  padding: 0;
  margin:5%;
  //svg{cursor: pointer}; 
  
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
  margin-bottom: 3%;
`;

const FormContainer = styled.div`
  background-color: #320C6A;
  border-radius: 5px;
  margin: 5% 25% 0% 25%;
  padding: 2% 2%;
`;

const FormAccept = styled.div`
  text-align: center;
  margin: 10;
  gap: 5%;
`;
const BotonGoogle = styled.div`
  background-color: #fafafa;
  border-radius: 0.8rem;
  width: 50px;
  cursor: pointer;
  height: 45px;
`;

const BotonFacebook = styled.div`
 background-color: #166fe5;
  width: 50px;
  border-radius: 0.8rem;
  cursor: pointer;
  height: 45px;
`;

const MsgError = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: ${colores.error};
  width: 100%;
  text-align: left;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: .3rem;
  margin: ${(props) => props.margin || ".5rem 0 .8rem 0"};
  cursor: pointer;
  color: var(--secondFontColor);
  padding: ${(props) => props.padding || ".2rem 1.8rem"};
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  /* background: ${(props) => props.color || "#23136e"}; */
  background: ${(props) => props.color || "var(--mainBackGroundButtonColor)"};  
  /* border: 1px solid ${(props) => props.color || "#23136e"}; */
  /* background: ${(props) => props.color || "#6d6a799f"}; */
  display: flex;
  height: 40px;
  line-height:30px;
img {
    height: 20px;
}



${props =>
            props.disabled ?
            css`
            opacity: 0.5;
            `
            :  css`
            &:hover{
            background: white;
            transition: all .9s ease;
            color: ${(props) => props.color || "var(--mainFontColor)"};
}
            `};


`

const Button1 = ({disabled=false, title, onClick}) => {
    return <StyledButton
     disabled={disabled}
     title={title}
     onClick={onClick}
     >
       {title}
     </StyledButton>;
};






/*Salida del Componente
{ 
    name
    nickname
    email
    password
    phone
}
*/
