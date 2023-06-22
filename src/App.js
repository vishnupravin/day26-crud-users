import "./App.css";
import TopBar from "./TopBar";
import DashBoard from "./DashBoard";
import Create_Users from "./Create_Users";
import View_User from "./View_User";
import Login from "./Login";
import Users from "./Users";
import PortalLayout from "./PortalLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fontawesome-free/css/all.min.css";
import { useContext } from "react";
import { UserContext } from "./UserCreate";

function App() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="TopBar" element={<TopBar />}></Route>
          <Route path="DashBoard" element={<DashBoard />}></Route>
          <Route path="Users" element={<Users />}></Route>
          <Route path="Create_Users" element={<Create_Users />}></Route>
          <Route path="user/:id" element={<View_User />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
