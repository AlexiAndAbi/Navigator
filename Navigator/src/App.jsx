import "./App.css";
{/*Level 1*/}
import Unit1 from "./pages/unit1/level1/unit1";
import Page2 from "./pages/unit1/level1/page2";
import Page3 from "./pages/unit1/level1/page3";
import Page4 from "./pages/unit1/level1/page4";
import Page5 from "./pages/unit1/level1/page5";
import Page6 from "./pages/unit1/level1/page6";
import Page7 from "./pages/unit1/level1/page7";
import Page8 from "./pages/unit1/level1/page8";
import Page9 from "./pages/unit1/level1/page9";
import Review1 from "./pages/unit1/level1/review1";
import Page10 from "./pages/unit1/level1/page10";
import Page11 from "./pages/unit1/level1/page11";
{/*Level 2*/}
import Page1Level2 from "./pages/unit1/level2/page1";
import Page2Level2 from "./pages/unit1/level2/page2";
import Page3Level2 from "./pages/unit1/level2/page3";
import Page4Level2 from "./pages/unit1/level2/page4";
import Page5Level2 from "./pages/unit1/level2/page5";
import Page6Level2 from "./pages/unit1/level2/page6";
import Page7Level2 from "./pages/unit1/level2/page7";
{/*Level 3*/}
import Page1Level3 from "./pages/unit1/level3/page1";
import Page2Level3 from "./pages/unit1/level3/page2";
import Page3Level3 from "./pages/unit1/level3/page3";
import Page4Level3 from "./pages/unit1/level3/page4";
import Page5Level3 from "./pages/unit1/level3/page5";
import Page6Level3 from "./pages/unit1/level3/page6";
import Page7Level3 from "./pages/unit1/level3/page7";
import Page8Level3 from "./pages/unit1/level3/page8";
import Page9Level3 from "./pages/unit1/level3/page9";
import Page10Level3 from "./pages/unit1/level3/page10";
import Page11Level3 from "./pages/unit1/level3/page11";
import Page12Level3 from "./pages/unit1/level3/page12";
{/*Level 4*/}
import Page1Level4 from "./pages/unit1/level4/page1";
import Page2Level4 from "./pages/unit1/level4/page2";
import Page3Level4 from "./pages/unit1/level4/page3";
import Page4Level4 from "./pages/unit1/level4/page4";
import Page5Level4 from "./pages/unit1/level4/page5";
import Page6Level4 from "./pages/unit1/level4/page6";
import Page7Level4 from "./pages/unit1/level4/page7";
import Page8Level4 from "./pages/unit1/level4/page8";
import Page9Level4 from "./pages/unit1/level4/page9";
import Page10Level4 from "./pages/unit1/level4/page10";
import Page11Level4 from "./pages/unit1/level4/page11";

import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/Homepage/about.jsx";
import TableContents from "./pages/TableContents/TableContents";
import Testing from "./pages/Testing/Testing";
import CongratulationsPage from "./pages/Testing/yay.jsx";
import Prompts from "./components/Prompt/Prompt";
import Unit1contents from "./pages/Unit1Contents/Unit1contents";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
        {/* Set the Home component for the root path */}
        <Route path="/Table-Of-Contents" element={<TableContents />} />{" "}
        <Route path="/about" element={<About />} />
        {/* Set the Home component for the root path */}
        {/*Level 1*/}
        <Route path="/Unit1-Level1" element={<Unit1 />} />
        <Route path="/Unit1-Level1-Page2" element={<Page2 />} />
        <Route path="/Unit1-Level1-Page3" element={<Page3 />} />
        <Route path="/Unit1-Level1-Page4" element={<Page4 />} />
        <Route path="/Unit1-Level1-Page5" element={<Page5 />} />
        <Route path="/Unit1-Level1-Page6" element={<Page6 />} />
        <Route path="/Unit1-Level1-Page7" element={<Page7 />} />
        <Route path="/Unit1-Level1-Page8" element={<Page8 />} />
        <Route path="/Unit1-Level1-Page9" element={<Page9 />} />
        <Route path="/Unit1-Level1-review" element={<Review1 />} />
        <Route path="/Unit1-Level1-Page10" element={<Page10 />} />
        <Route path="/Unit1-Level1-Page11" element={<Page11 />} />
        {/*Level 2*/}
        <Route path="/Unit1-Level2" element={<Page1Level2 />} />
        <Route path="/Unit1-Level2-page2" element={<Page2Level2 />} />
        <Route path="/Unit1-Level2-page3" element={<Page3Level2 />} />
        <Route path="/Unit1-Level2-page4" element={<Page4Level2 />} />
        <Route path="/Unit1-Level2-page5" element={<Page5Level2 />} />
        <Route path="/Unit1-Level2-page6" element={<Page6Level2 />} />
        <Route path="/Unit1-Level2-page7" element={<Page7Level2 />} />
        {/*Level 3*/}
        <Route path="/Unit1-Level3" element={<Page1Level3 />} />
        <Route path="/Unit1-Level3-page2" element={<Page2Level3 />} />
        <Route path="/Unit1-Level3-page3" element={<Page3Level3 />} />
        <Route path="/Unit1-Level3-page4" element={<Page4Level3 />} />
        <Route path="/Unit1-Level3-page5" element={<Page5Level3 />} />
        <Route path="/Unit1-Level3-page6" element={<Page6Level3 />} />
        <Route path="/Unit1-Level3-page7" element={<Page7Level3 />} />
        <Route path="/Unit1-Level3-page8" element={<Page8Level3 />} />
        <Route path="/Unit1-Level3-page9" element={<Page9Level3 />} />
        <Route path="/Unit1-Level3-page10" element={<Page10Level3 />} />
        <Route path="/Unit1-Level3-page11" element={<Page11Level3 />} />
        <Route path="/Unit1-Level3-page12" element={<Page12Level3 />} />
        {/*Level 4*/}
        <Route path="/Unit1-Level4" element={<Page1Level4 />} />
        <Route path="/Unit1-Level4-page2" element={<Page2Level4 />} />
        <Route path="/Unit1-Level4-page3" element={<Page3Level4 />} />
        <Route path="/Unit1-Level4-page4" element={<Page4Level4 />} />
        <Route path="/Unit1-Level4-page5" element={<Page5Level4 />} />
        <Route path="/Unit1-Level4-page6" element={<Page6Level4 />} />
        <Route path="/Unit1-Level4-page7" element={<Page7Level4 />} />
        <Route path="/Unit1-Level4-page8" element={<Page8Level4 />} />
        <Route path="/Unit1-Level4-page9" element={<Page9Level4 />} />
        <Route path="/Unit1-Level4-page10" element={<Page10Level4 />} />
        <Route path="/Unit1-Level4-page11" element={<Page11Level4 />} />
        {/*Extras*/}
        <Route path="/Play" element={<Testing />} />
        <Route path="/Yay" element={<CongratulationsPage />} />
        <Route path="/Prompts" element={<Prompts />} />
        <Route path="/Unit1-Contents" element={<Unit1contents />} />
      </Routes>
    </Router>
  );
}

export default App;
