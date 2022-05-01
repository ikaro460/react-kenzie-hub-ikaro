import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 5px 10px;
  transition: 0.2s;
  background-color: var(--grey-4);
  :hover {
    background-color: var(--grey-2);
    h3 {
      transition: 0.4s;
      color: var(--grey-1);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 5px;
    border-radius: 3px;
    padding: 10px;
  }

  @media (min-width: 500px) {
    div {
      padding: 15px;
    }
  }
  h2 {
    font-size: 1rem;
    color: var(--grey-0);
  }
  h3 {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--grey-2);
  }
`;
