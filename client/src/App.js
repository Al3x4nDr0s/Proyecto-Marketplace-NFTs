import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home";

import './App.css';
import Header from './components/Header/Header';
function MainLayout() {
  return (
    <div>
      <Header/>
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
          <Route element={<MainLayout />}>
            <Route exact path={"/"} element={<LandingPage />} />
            <Route exact path={"/home"} element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
