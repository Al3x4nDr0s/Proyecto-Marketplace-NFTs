import { Fragment } from 'react';
import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home";

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<LandingPage />}/>
        <Route exact path={"/home"} element={
          <Fragment>
            {/* <NavBar/> */}
            <Home />
            <Footer />
          </Fragment>
        }/>
      </Routes>
    </div>
  );
}

export default App;
