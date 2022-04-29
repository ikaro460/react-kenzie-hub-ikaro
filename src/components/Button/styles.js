import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.greySchema ? "#868E96" : "#ff577f")};
  color: ${(props) => (props.greySchema ? "#F8F9FA" : "#FFFFFF")};
  height: 38px;
  width: 260px;
  border-radius: 3px;
  border: 1px solid ${(props) => (props.greySchema ? "#868E96" : "#ff577f")};
  margin-top: 10px;
  transition: 0.5s;
  :hover {
    border: 1px solid var(--grey-0);
  }
`;
