import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  position: absolute;
  margin-top: 125px;

  .modal-header {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-2);
    padding: 0;
    border: 0;

    button {
      padding: 15px;
      background-color: var(--grey-2);
      border: 0;
      color: var(--grey-1);
    }

    h3 {
      padding: 15px;
      font-size: 0.9rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    padding: 30px;
  }
`;
