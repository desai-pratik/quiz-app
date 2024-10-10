import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
