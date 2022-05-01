import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function RoutesComponent() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!!token) {
      return setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [navigate, authenticated]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage authenticated={authenticated} />} />
      <Route
        path="/login"
        element={
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        }
      />
      <Route
        path="/signup"
        element={<Signup authenticated={authenticated} />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard authenticated={authenticated} />}
      />
    </Routes>
  );
}

export default RoutesComponent;
