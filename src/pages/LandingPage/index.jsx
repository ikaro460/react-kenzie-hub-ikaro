import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    return navigate(path);
  };

  return (
    <Container>
      <Content>
        <h1>Kenzie Hub</h1>
        <span>Organize seu portfolio Dev!</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")}>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")} greySchema>
            Entrar
          </Button>
        </div>
      </Content>
    </Container>
  );
}
