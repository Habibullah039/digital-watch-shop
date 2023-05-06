
import {Routes,Route} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
