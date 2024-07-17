
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PlayPage from "./components/PlayPage";
import TermsPage from "./components/TermsPage";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route path="/football-quiz" element={<HomePage/>}/>
        <Route path="/football-quiz/play" element={<PlayPage/>}/>
        <Route path="/football-quiz/terms" element={<TermsPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
