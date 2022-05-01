import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 296px;
    margin: 10px 0;
    padding: 2px;

    button {
      width: 35%;
      height: 100%;
      background-color: var(--grey-3);
      border: 1px solid var(--grey-3);
      margin: 0;
      padding: 5px 0;

      :hover {
        border: 1px solid var(--grey-1);
      }
    }
  }

  div {
    font-size: 0.8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const appearFromRight = keyframes`

from {
    opacity: 0;
    transform: translateX(50px);
}

to {
    opacity: 1;
    transform: translateX(0px);
}

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight};
  background-color: var(--grey-3);
  border-radius: 3px;

  form {
    margin: 8px;
    width: 280px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 1rem;
      color: var(--grey-0);
    }

    p {
      font-size: 0.7rem;
      margin: 15px 0;
    }

    Button {
      margin: 20px 0;
    }
  }
`;
