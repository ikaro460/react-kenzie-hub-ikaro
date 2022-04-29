import { Container, SelectContainer } from "./styles";

function Select({ label, icon, register, name, ...rest }) {
  return (
    <Container>
      <div id="label">{label}</div>

      <SelectContainer>
        <select {...register(name)} {...rest}>
          <option>M1</option>
          <option>M2</option>
          <option>M3</option>
        </select>
      </SelectContainer>
    </Container>
  );
}

export default Select;
