import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer.jsx";
// import Home from "./components/Home/Home";
import {ViewUser} from './components/ViewUser/ViewUser.jsx'

import './App.css';
function MainLayout() {
  return (
    <div>
      {/* <NavBar/> */}
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route element={<MainLayout />}>
            <Route exact path={"/myprofile"} element={<ViewUser/>}/>
            <Route exact path={"/home"} element={<h1>Home</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
