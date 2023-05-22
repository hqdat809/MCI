import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
