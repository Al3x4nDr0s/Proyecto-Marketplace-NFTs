import { Fragment } from 'react';
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home";
<<<<<<< HEAD
import { ViewUser } from "./components/ViewUser/ViewUser.jsx"
=======
import FooterPrueba from './components/Footer/FooterPrueba.jsx';
import {ViewUser} from './components/ViewUser/ViewUser.jsx'
>>>>>>> 6bcb6a858a3c661ac3df6887435999eee6c2c006

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
<<<<<<< HEAD
            <Route exact path={"/home"} element={<Home />} />
            <Route exact path={"/myprofile"} element={<ViewUser />} />
=======
            <Route exact path={"/myprofile"} element={<ViewUser/>}/>
            <Route exact path={"/home"} element={<h1>Home</h1>} />
            <Route exact path={"/pruebFooter"} element={<FooterPrueba/>}/>
>>>>>>> 6bcb6a858a3c661ac3df6887435999eee6c2c006
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
