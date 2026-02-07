import { Routes, Route } from "react-router-dom";
import Content from "./assets/Content/Content";
import Final from "./assets/Content/finalPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
}
