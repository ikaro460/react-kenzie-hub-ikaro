import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { useState } from "react";

export default function UpdateModal({
  setOpenModal,
  updateTech,
  deleteTech,
  setUpdateModal,
  userData,
  techId,
}) {
  const [currentTech] = useState(userData.techs.filter((a) => a.id === techId));

  const schema = yup.object().shape({
    status: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container>
      <div className="background">
        <div className="modal-header">
          <h3>Tecnologia Detalhes</h3>
          <button
            onClick={() => {
              setOpenModal(false);
              setUpdateModal(false);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(updateTech)}>
          <Input
            disabled={true}
            name="title"
            label="Nome"
            placeholder={currentTech[0].title}
            error={errors.title?.message}
          />
          <Select
            currentStatus={currentTech[0].status}
            register={register}
            name="status"
            label="Selecionar status"
            option1="Iniciante"
            option2="Intermediário"
            option3="Avançado"
          />
          <div className="button-div">
            <Button type="submit">Salvar alterações</Button>
            <Button
              className="delete-button"
              onClick={() => {
                deleteTech();
              }}
            >
              Excluir
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
