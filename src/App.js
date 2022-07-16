import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/page-1" element={<Page1 />} />
    </Routes>
  );
}

export default App;
