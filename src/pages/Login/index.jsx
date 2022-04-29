import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AnimationContainer, Container, Content } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmitFunction = ({ email, password }) => {
    const user = {
      email,
      password,
    };
    api
      .post("/sessions", user)
      .then((response) => {
        toast.success("Sucesso ao criar conta!");
        return navigate("/Home");
      })
      .catch((err) => toast.error("Erro ao criar conta"));
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Login</h2>
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
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui uma conta?</p>
            <Button greySchema onClick={() => navigate("/signup")}>
              Cadastre-se
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
