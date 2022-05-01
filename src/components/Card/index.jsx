import React from "react";
import { StyledCard } from "./styles";

export default function Card({
  title,
  status,
  id,
  setOpenModal,
  setUpdateModal,
  setTechId,
}) {
  return (
    <StyledCard id={id}>
      <div
        onClick={() => {
          setUpdateModal(true);
          setOpenModal(true);
          setTechId(id);
        }}
      >
        <h2>{title}</h2>
        <h3>{status}</h3>
      </div>
    </StyledCard>
  );
}
