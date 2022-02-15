import classes from "./App.module.scss";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/header/Header";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header className={classes.header} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
