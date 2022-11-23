import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout.jsx";
import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
