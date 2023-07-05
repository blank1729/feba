import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";
import About from "./pages/about";
import Bible from "./pages/bible";
import Podcast from "./pages/podcast";
import Donate from "./pages/donate";
import Programs from "./pages/programs";
import Partners from "./pages/partners";
import Blog from "./pages/blog";
import Videos from "./pages/videos";
import Contact from "./pages/contact";

const InternetRadioRoutes = () => {
  const location = useLocation();
  return (
    <Routes key={location.key}>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="podcast" element={<Podcast />} />
        <Route path="programs" element={<Programs />} />
        <Route path="bible" element={<Bible />} />
        <Route path="blog" element={<Blog />} />
        <Route path="videos" element={<Videos />} />
        <Route path="partners" element={<Partners />} />
        <Route path="donate" element={<Donate />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default InternetRadioRoutes;
