import React from "react";
import { StyledCard } from "./styles";

export default function Card({ title, status }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <h3>{status}</h3>
      </div>
    </StyledCard>
  );
}
