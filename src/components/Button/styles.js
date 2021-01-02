import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid var(--white);
  border-radius: 0.2em;
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1em 1.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  transition: all 500ms ease-in-out;
  background-image: linear-gradient(45deg, var(--quinary) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  &:hover,
  &:focus {
    outline: 0;
    background-position: 0;
    border-color: var(--quinary);
    color: var(--white);
  }
`;