import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Card from "../../components/Card";
import ModalTech from "../../components/ModalTech";
import UpdateModal from "../../components/UpdateModal";
import api from "../../services/api";
import { CardContainer, Container } from "./styles";

export default function Dashboard({ authenticated }) {
  const [userData, setUserData] = useState();
  const [token] = useState(localStorage.getItem("authToken") || "");
  const [techId, setTechId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  function getData() {
    api.get(`/users/${userId}`).then((res) => {
      setUserData(res.data);
    });
  }

  function addTech({ title, status }) {
    const formData = { title, status };
    // console.log(formData);
    api
      .post(
        "/users/techs",
        {
          title: formData.title,
          status: formData.status,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        toast.success("Tecnologia Cadastrada");
        getData();
        setOpenModal(false);
        setUpdateModal(false);
      })
      .catch((err) => toast.error("Erro ao cadastrar tecnologia"));
  }

  function updateTech(formData) {
    console.log(formData);
    api
      .put(
        `/users/techs/${techId}`,
        {
          status: formData.status,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        toast.success("Tecnologia atualizada");
        getData();
        setOpenModal(false);
        setUpdateModal(false);
      })
      .catch((err) => toast.error("Erro ao atualizar"));
  }

  function deleteTech() {
    api
      .delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Tecnologia excluída");
        getData();
        setOpenModal(false);
        setUpdateModal(false);
      })
      .catch((err) => toast.error("Erro ao excluir"));
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
        {openModal ? (
          updateModal ? (
            <UpdateModal
              setOpenModal={setOpenModal}
              setUpdateModal={setUpdateModal}
              techId={techId}
              updateTech={updateTech}
              deleteTech={deleteTech}
              userData={userData}
            />
          ) : (
            <ModalTech
              setOpenModal={setOpenModal}
              addTech={addTech}
              setUpdateModal={setUpdateModal}
            />
          )
        ) : null}
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
          <p>{userData.bio}</p>
        </header>
        <div className="add-bar">
          <h2>Tecnologias</h2>
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            +
          </Button>
        </div>
        {userData.techs.length > 0 ? (
          <CardContainer>
            {userData.techs.map((a, index) => {
              return (
                <Card
                  key={index}
                  id={a.id}
                  title={a.title}
                  status={a.status}
                  setOpenModal={setOpenModal}
                  setUpdateModal={setUpdateModal}
                  setTechId={setTechId}
                />
              );
            })}
          </CardContainer>
        ) : (
          <span>Não há tecnologias cadastradas</span>
        )}
      </Container>
    );
  }
}
