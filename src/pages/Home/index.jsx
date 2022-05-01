import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Home({ authenticated }) {
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <Button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Sair
      </Button>
    </>
  );
}
