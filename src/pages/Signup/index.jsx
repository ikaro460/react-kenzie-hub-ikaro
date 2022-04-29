import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AnimationContainer, Container, Content } from "./styles";
import Select from "../../components/Select";

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
    modulo: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Crie sua conta</h2>
            <p>Rápido e grátis, vamos nessa</p>
            <Input
              name="name"
              register={register}
              label="Nome"
              placeholder="Digite aqui seu nome"
            />
            <Input
              name="email"
              register={register}
              label="E-mail"
              placeholder="Digite aqui seu e-mail"
            />
            <Input
              name="password"
              register={register}
              type="password"
              label="Senha"
              placeholder="Digite aqui sua senha"
            />
            <Input
              name="confirmPassword"
              register={register}
              type="password"
              label="Confirmar Senha"
              placeholder="Digite aqui sua senha"
            />
            <Select register={register} name="modulo" label="Módulo"></Select>
            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
