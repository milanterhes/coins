import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  border: none;
  background: none;
  background-color: #32c48d;
  color: white;
  cursor: pointer;
  transition: all 300ms;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Button;
