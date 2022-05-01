import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav,
  .add-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px 30px 8px;
    border-bottom: 1px solid var(--grey-1);

    h2 {
      color: var(--grey-0);
      font-size: 1rem;
    }

    button {
      margin: 0;
      width: 20%;
      background-color: var(--grey-3);
      border: var(--grey-3);
    }
  }

  header {
    border-bottom: 1px solid var(--grey-1);
    padding: 40px 8px;
    width: 100%;
    h2 {
      color: var(--grey-0);
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
    p {
      color: var(--grey-1);
    }
  }
  .add-bar {
    width: 100%;
    padding: 16px 8px;
    border: 0;
    button {
      font-weight: bold;
      font-size: 1.5rem;
      width: 13%;
    }
  }
`;

export const CardContainer = styled.div`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  width: 92%;
  margin: 10px 55px;
  padding: 5px 0;

  }
`;
