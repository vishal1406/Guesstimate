import { Routes, Route } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../navigation/routes";
import { Header, Toast } from "../../shared";

const PrivateLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          padding: "70px 50px 0px 50px",
          backgroundColor: "#F9FBFD",
          minHeight: "82vh",
        }}
      >
        <Routes>
          {PRIVATE_ROUTES.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Routes>
      </div>
      <Toast />
    </div>
  );
};

export default PrivateLayout;
