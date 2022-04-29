import { Container, InputContainer } from "./styles";

function Input({ label, icon, register, name, ...rest }) {
  return (
    <Container>
      <div id="label">{label}</div>

      <InputContainer>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input;
