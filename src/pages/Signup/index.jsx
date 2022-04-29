import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AnimationContainer, Container, Content } from "./styles";
import Select from "../../components/Select";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    course_module: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmitFunction = ({
    name,
    email,
    password,
    course_module,
    contact = "123456789",
    bio = "Lorem ipsum",
  }) => {
    const user = {
      email,
      password,
      name,
      bio,
      contact,
      course_module,
    };
    console.log(user);
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Sucesso ao criar conta!");
        return navigate("/login");
      })
      .catch((err) => toast.error("Erro ao criar conta"));
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h1>Kenzie Hub</h1>
          <Button greySchema onClick={() => navigate("/")}>
            Voltar
          </Button>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Crie sua conta</h2>
            <p>Rápido e grátis, vamos nessa</p>
            <Input
              name="name"
              register={register}
              label="Nome"
              placeholder="Digite aqui seu nome"
              error={errors.name?.message}
            />
            <Input
              name="email"
              register={register}
              label="E-mail"
              placeholder="Digite aqui seu e-mail"
              error={errors.email?.message}
            />
            <Input
              name="password"
              register={register}
              type="password"
              label="Senha"
              placeholder="Digite aqui sua senha"
              error={errors.password?.message}
            />
            <Input
              name="confirmPassword"
              register={register}
              type="password"
              label="Confirmar Senha"
              placeholder="Digite aqui sua senha"
              error={errors.confirmPassword?.message}
            />
            <Select
              register={register}
              name="course_module"
              label="Módulo"
            ></Select>
            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
