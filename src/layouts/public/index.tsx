import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../navigation/routes";
import { Header, Footer, Toast } from "../../shared";

const PublicLayout = () => {
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
          {PUBLIC_ROUTES.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Routes>
      </div>
      <Footer />
      <Toast />
    </div>
  );
};

export default PublicLayout;
