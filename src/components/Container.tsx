import styled from "styled-components";

const Container = styled.div(
  ({ theme: { breakpoints } }) => `
    display: grid;

    grid-template-columns: auto;
    grid-row-gap: 5px;
    grid-column-gap: 5px;
    justify-items: center;

    padding: 10px;

    ${breakpoints.tablet} {
      grid-template-columns: auto auto;
    }

    ${breakpoints.desktop} {
      grid-template-columns: auto auto auto;
    }
  `
);

export default Container;
