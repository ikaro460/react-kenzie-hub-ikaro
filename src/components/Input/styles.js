import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 260px;
  #label {
    text-align: left;
    margin: 5px 3px;
  }

  div {
    font-size: 0.8rem;
    span {
      color: var(--negative);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--grey-2);
  color: var(--grey-0);
  border: 2px solid var(--grey-2);
  border-radius: 3px;
  padding: 1rem;
  display: flex;
  transition: 0.3s;

  :focus {
    border: 2px solid var(--grey-0);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}

  ${(props) =>
    props.whiteBorder &&
    css`
      border: 1px solid var(--grey-0);
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--grey-0);

    &::placeholder {
      /* color: var(--grey-1); */
    }
  }
`;
