import { Outlet } from "react-router-dom";
import './all.css';
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
