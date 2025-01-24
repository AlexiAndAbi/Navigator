import "./App.css";
import Unit1 from "./pages/unit1/level1/unit1";
import Page2 from "./pages/unit1/level1/page2";
import Page3 from "./pages/unit1/level1/page3";
import Page4 from "./pages/unit1/level1/page4";
import Page5 from "./pages/unit1/level1/page5";
import Page6 from "./pages/unit1/level1/page6";
import Page7 from "./pages/unit1/level1/page7";
import Page8 from "./pages/unit1/level1/page8";
import Page9 from "./pages/unit1/level1/page9";
import Page10 from "./pages/unit1/level1/page10";
import Page11 from "./pages/unit1/level1/page11";
import Homepage from "./pages/Homepage/Homepage";
import TableContents from "./pages/TableContents/TableContents";
import Testing from "./pages/Testing/Testing";
import Prompts from "./components/Prompt/Prompt";
import Unit1contents from "./pages/Unit1Contents/Unit1contents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
        {/* Set the Home component for the root path */}
        <Route path="/Table-Of-Contents" element={<TableContents />} />{" "}
        {/* Set the Home component for the root path */}
        <Route path="/Unit1-Level1" element={<Unit1 />} />
        <Route path="/Unit1-Level1-Page2" element={<Page2 />} />
        <Route path="/Unit1-Level1-Page3" element={<Page3 />} />
        <Route path="/Unit1-Level1-Page4" element={<Page4 />} />
        <Route path="/Unit1-Level1-Page5" element={<Page5 />} />
        <Route path="/Unit1-Level1-Page6" element={<Page6 />} />
        <Route path="/Unit1-Level1-Page7" element={<Page7 />} />
        <Route path="/Unit1-Level1-Page8" element={<Page8 />} />
        <Route path="/Unit1-Level1-Page9" element={<Page9 />} />
        <Route path="/Unit1-Level1-Page10" element={<Page10 />} />
        <Route path="/Unit1-Level1-Page11" element={<Page11 />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/Prompts" element={<Prompts />} />
        <Route path="/Unit1-Contents" element={<Unit1contents />} />
      </Routes>
    </Router>
  );
}

export default App;
