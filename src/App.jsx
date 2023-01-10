import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
