import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 400px;
  h1 {
    font-size: 1rem;
  }

  div {
    flex: 1;

    button + button {
      margin-left: 1rem;
    }
  }
`;
