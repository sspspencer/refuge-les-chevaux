import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sponsors from "./Sponsors";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Support from "./Support";
import Horses from "./Horses";
import Team from "./Team";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<Contact />} />
        <Route path="support" element={<Support />} />
        <Route path="horses" element={<Horses />} />
        <Route path="team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
