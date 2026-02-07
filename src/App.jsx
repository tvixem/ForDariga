import { Routes, Route } from "react-router-dom";
import Content from "./assets/Content/Content";
import ValentinesPage from "./assets/Content/finalPage.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/final" element={<ValentinesPage />} />
    </Routes>
  );
}
