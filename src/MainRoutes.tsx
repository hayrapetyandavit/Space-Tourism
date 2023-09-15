import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Destination from "./pages/Destination";

const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />?
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
