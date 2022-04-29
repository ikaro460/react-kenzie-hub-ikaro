import { Container } from "./styles";

const Button = ({ children, greySchema, ...rest }) => {
  return (
    <Container greySchema={greySchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
