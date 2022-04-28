import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer.jsx";
// import NavBar from './components/Header/Header.jsx';
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {ViewUser} from './components/ViewUser/ViewUser.jsx'

import './App.css';
function MainLayout() {
  return (
    <div>
      <Header />
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
            <Route exact path={"/home"} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
