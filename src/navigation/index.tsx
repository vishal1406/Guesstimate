import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrivateLayout from "../layouts/private";
import PublicLayout from "../layouts/public";

const Navigation = () => {
  const navigate = useNavigate();
  const sessionToken = localStorage.getItem("sessionToken");

  useEffect(() => {
    navigate("/home");
  }, []);

  return <>{sessionToken ? <PrivateLayout /> : <PublicLayout />}</>;
};

export default Navigation;
