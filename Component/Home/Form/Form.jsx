import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  margin: 5rem auto;
  padding: 3rem;
  justify-content: center;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  border: none;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 100px;
  background: #aaaaaa20;
  border: none;
  outline: none;
  margin: 1rem 0;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #fff;
  color: #111;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  outline: none;
  transition: all 1s ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
