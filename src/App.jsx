import { NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
