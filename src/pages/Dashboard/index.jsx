import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import api from "../../services/api";
import { CardContainer, Container } from "./styles";

export default function Dashboard({ authenticated }) {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  function getData() {
    api.get(`/users/${userId}`).then((res) => {
      setUserData(res.data);
    });
  }
  useEffect(() => {
    getData();
    if (!authenticated) {
      return navigate("/login");
    }
  }, []);

  if (userData === undefined) {
    return <p>Loading...</p>;
  } else {
    return (
      <Container>
        <nav>
          <h1>Kenzie Hub</h1>
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Sair
          </Button>
        </nav>
        <header>
          <h2>Olá, {userData.name}</h2>
          <p>Primero módulo</p>
        </header>
        <div className="add-bar">
          <h2>Tecnologias</h2>
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            +
          </Button>
        </div>
        <CardContainer>
          <Card title="Teste Local" status="TesteLocal" />
          {userData.techs.map((a, index) => {
            console.log(a.title);
            return <Card key={index} title={a.title} status={a.status} />;
          })}
        </CardContainer>
      </Container>
    );
  }
}
