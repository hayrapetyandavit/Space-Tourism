import React from "react";
import Layout from "./layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
