import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";

export default function ModalTech({ setOpenModal, addTech, setUpdateModal }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
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
          <h3>Cadastrar tecnologia</h3>
          <button
            onClick={() => {
              setOpenModal(false);
              setUpdateModal(false);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(addTech)}>
          <Input
            whiteBorder
            name="title"
            register={register}
            label="Nome"
            placeholder="Digite o nome da tech"
            error={errors.title?.message}
          />
          <Select
            whiteBorder
            register={register}
            name="status"
            label="Selecionar status"
            option1="Iniciante"
            option2="Intermediário"
            option3="Avançado"
          ></Select>
          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </div>
    </Container>
  );
}
