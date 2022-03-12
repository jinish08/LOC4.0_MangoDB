import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cricket from "./pages/cricket";
import Exercise1 from "./pages/cricket/Exercise1";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import AuthContextProvider from "./contexts/AuthContext";
import Exerciselist from "./pages/cricket/Exerciselist";
import Level from "./pages/Level";

function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/cricket/exercise" element={<Exerciselist />} />
        <Route path="cricket/e1" element={<Exercise1 />} />
        <Route path="/profile" element={<Level />} />
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
