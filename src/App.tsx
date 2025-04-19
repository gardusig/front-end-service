import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PersonaEditorPage from "./pages/persona-editor/PersonaEditorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<PersonaEditorPage />} />
      </Routes>
    </Router>
  );
}
