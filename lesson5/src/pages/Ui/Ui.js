import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Cards = styled.div`
  max-width: ${(props) => props.maxwidth || "300px"};
  border: 1px solid gray;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;
export const CardTitleh1 = styled.h1`
  font-size: ${(props) => props.size || "1.5rem"};
  font-weight: 600;
  color: #333;
`;

export const ParagraphTypography = styled(CardTitleh1)`
  font-size: 1.5rem;
`;

export const AsTypography = styled.p`
  ${(props) => {
    switch (props.as) {
      case "h1":
        return css`
          font-size: 2rem;
          font-weight: 500;
          color: red;
        `;
      case "h2":
        return css`
          font-size: 1.5rem;
          font-weight: 400;
          color: black;
        `;
      case "h3":
        return css`
          font-size: 1.2rem;
          font-weight: 300;
          color: green;
        `;
      case "p":
        return css`
          font-size: 1rem;
          font-weight: 200;
          color: yellow;
        `;

      default:
        return css`
          font-size: 1rem;
        `;
    }
  }}
`;

export const CustomButtonStyled = styled.button`
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: #ff0000;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
          &:hover {
            background-color: green;
          }
        `;
      case "secondary":
        return css`
          background-color: #00ff00;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
          &:hover {
            background-color: #33ff33;
          }
        `;
      case "base":
        return css`
          background-color: #0000ff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
          &:hover {
            background-color: #3333ff;
          }
        `;
    }
  }}
`;
