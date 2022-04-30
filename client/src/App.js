import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer.jsx";
// import NavBar from './components/Header/Header.jsx';
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { ViewUser } from './components/ViewUser/ViewUser.jsx';
import Login from './components/Auth/Login.jsx';
import { DetailsNft } from './components/Home/elements/DetailsNft.jsx';
import {AllNft} from './components/Home/elements/AllNft.jsx';
// import PrivateRoute from './services/getPrivateRoute'
import { Register } from './components/Register/Register.jsx'
import './App.css';
import { MisPublicaciones } from "./components/ViewUser/Publicaciones/MisPublicaciones.jsx";
import { useSelector } from "react-redux";
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

  const logged = useSelector(state => state.isLogged)

  console.log(logged)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route element={<MainLayout />}>
            <Route exact path={"/myprofile"} element={logged ? <ViewUser /> : <Home />} />
            <Route exact path={"/myprofile/mispublicaciones"} element={logged ? <MisPublicaciones /> : <Home />} />
            <Route exact path={"/details/:idNft"} element={<DetailsNft />} />
            <Route exact path={"/nft"} element={<AllNft />} />
            <Route exact path={"/home"} element={<Home />} />
            <Route exact path={"/home/login"} element={!logged ? <Login /> : <Home/>} />
            <Route exact path={"/register"} element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
