import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import './all.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
