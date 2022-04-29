import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 260px;
  margin-left: 10px;
  #label {
    text-align: left;
    margin: 5px 3px;
  }
`;

export const SelectContainer = styled.div`
  background: var(--grey-2);
  color: var(--grey-0);
  border: 2px solid var(--grey-2);
  border-radius: 3px;
  padding: 1rem;
  display: flex;
  transition: 0.3s;

  :hover {
    border: 2px solid var(--grey-0);
  }

  select {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--grey-1);

    &::placeholder {
      /* color: var(--grey-1); */
    }
  }
`;
