import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  h1 {
    font-size: 2rem;
    margin: 20px;
  }

  div {
    flex: 1;
  }
`;
