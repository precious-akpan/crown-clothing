import styled from "styled-components";

export const CategoryContainerBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  row-gap: 50px;

  h2 {
    font-size: 38px;
    text-align: center;
  }
`;
