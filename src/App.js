import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cricket from "./pages/cricket";
import Exercise1 from "./pages/cricket/Exercise1";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="cricket/e1" element={<Exercise1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
