import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonaEditorPage from "./pages/personas/[personaId]/PersonaEditorPage";
import NotFoundPage from "./pages/NotFoundPage";
import PersonaListPage from "./pages/personas/PersonaListPage";
import HomePage from "./pages/HomePage";
import DeckListPage from "./pages/decks/DeckListPage";
import DeckEditorPage from "./pages/decks/[deckId]/DeckEditorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decks" element={<DeckListPage />} />
        <Route path="/decks/:deckId" element={<DeckEditorPage />} />
        <Route path="/personas" element={<PersonaListPage />} />
        <Route path="/personas/:personaId" element={<PersonaEditorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
