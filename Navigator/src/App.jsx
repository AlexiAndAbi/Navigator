
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Homepage  from "./pages/Homepage/Homepage";
import TableContents from "./pages/TableContents/TableContents";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Set the Home component for the root path */}
        <Route path="/Table-Of-Contents" element={<TableContents />} /> {/* Set the Home component for the root path */}

      </Routes>
    </Router>
  )
}

export default App
