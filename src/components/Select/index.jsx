import { Container, SelectContainer } from "./styles";

function Select({
  label,
  icon,
  register,
  name,
  option1,
  option2,
  option3,
  whiteBorder,
  currentStatus,
  ...rest
}) {
  return (
    <Container>
      <div id="label">{label}</div>

      <SelectContainer whiteBorder={whiteBorder}>
        <select {...register(name)} {...rest}>
          <option defaultValue={currentStatus === option1 ? "selected" : false}>
            {option1}
          </option>
          <option defaultValue={currentStatus === option2 ? "selected" : false}>
            {option2}
          </option>
          <option defaultValue={currentStatus === option3 ? "selected" : false}>
            {option3}
          </option>
        </select>
      </SelectContainer>
    </Container>
  );
}

export default Select;
