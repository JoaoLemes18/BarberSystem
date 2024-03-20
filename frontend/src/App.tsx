import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <section className="app" style={{ height: "100vh" }}>
        <AppRoutes />
      </section>
    </BrowserRouter>
  );
};

export default App;
