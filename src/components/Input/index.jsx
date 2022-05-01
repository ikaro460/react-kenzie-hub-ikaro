import { Container, InputContainer } from "./styles";

function Input({
  label,
  icon,
  register,
  name,
  error,
  whiteBorder,
  disabled,
  ...rest
}) {
  return (
    <Container>
      <div id="label">
        {label} {!!error && <span> - {error}</span>}
      </div>

      <InputContainer whiteBorder={whiteBorder} isErrored={!!error}>
        <input
          {...(!!disabled === false ? { ...register(name) } : null)}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
}

export default Input;
