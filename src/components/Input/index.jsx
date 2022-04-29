import { Container, InputContainer } from "./styles";

function Input({ label, icon, register, name, error, ...rest }) {
  return (
    <Container>
      <div id="label">
        {label} {!!error && <span> - {error}</span>}
      </div>

      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input;
