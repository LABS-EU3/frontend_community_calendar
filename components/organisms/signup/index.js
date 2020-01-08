import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../../atoms/Button";
import NavBar from "../../molecules/Navbar/";
import Input from "../../atoms/Input/";

export const BorderDiv = styled.div`
  width: 25rem;
  height: 32rem;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding-top: 3rem;
`;
export const InputDiv = styled.div`
  margin-bottom: 1.5rem;
`;
export const Label = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.6rem;
  margin-top: 0.7rem;
  margin-right: 7rem;
  font-size: 1.3rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: ""
  };
  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };
  return (
    <div>
      <NavBar alt />
      <BorderDiv>
        <Form>
          <InputDiv>
            <Label>Name</Label>
            <Input
              large
              type="text"
              onChange={handleChange}
              name="name"
              value={credentials.name}
            />
          </InputDiv>

          <InputDiv>
            <Label>Email address</Label>
            <Input
              large
              type="text"
              onChange={handleChange}
              name="name"
              value={credentials.email}
            />
          </InputDiv>

          <InputDiv>
            <Label>Password</Label>
            <Input
              large
              type="text"
              onChange={handleChange}
              name="name"
              value={credentials.password}
            />
          </InputDiv>
          <Paragraph>Lagos,NG(Change)</Paragraph>
          <Button large style={{ width: "20rem", height: "3rem" }}>
            Sign up
          </Button>
        </Form>
      </BorderDiv>
    </div>
  );
};