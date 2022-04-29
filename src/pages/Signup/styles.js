import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
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

    h2 {
      margin: 1rem;
      color: var(--grey-0);
    }

    p {
      font-size: 0.7rem;
      margin: 15px 0;
    }

    Button {
      margin-bottom: 5px;
    }
  }
`;
