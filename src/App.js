import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cricket from "./pages/cricket";
import Exercise1 from "./pages/cricket/Exercise1";
import Exercise2 from "./pages/cricket/Exercise2";
import Exercise3 from "./pages/cricket/Exercise3";
import Exercise4 from "./pages/cricket/Exercise4";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import AuthContextProvider from "./contexts/AuthContext";
import Exerciselist from "./pages/cricket/Exerciselist";
import {useAuth} from "./contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

function App() {

  const {currentUser} = useAuth();

  return (
      <Routes>
        {!currentUser && <Route path="/landing" element={<Landing />} />}
        {/* {currentUser?<Navigate to="/" />:<Navigate to="/landing" />} */}

        {currentUser && <><Route path="/" element={<Dashboard />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/cricket/exercise" element={<Exerciselist />} />
        <Route path="cricket/e1" element={<Exercise1 />} />
        <Route path="cricket/e2" element={<Exercise2 />} />
        <Route path="cricket/e3" element={<Exercise3 />} />
        <Route path="cricket/e4" element={<Exercise4 />} />
        </>}

        <Route path="*" element={<Navigate to={currentUser?"/":"landing"} />} />
      </Routes>
  );
}

export default App;
