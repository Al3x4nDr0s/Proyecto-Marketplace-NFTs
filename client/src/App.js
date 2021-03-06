import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer.jsx";

import { CreateNft } from "./components/CreateNft/CreateNft.jsx";
import { CreateNftAdmin } from "./components/Admin/Tables/CreateNftAdmin.jsx";
// import NavBar from './components/Header/Header.jsx';
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { ViewUser } from "./components/ViewUser/ViewUser.jsx";
import Login from "./components/Auth/Login.jsx";
import { Details } from "./components/Details/Details.jsx";
import { AllNft } from "./components/Home/elements/AllNft/AllNft.jsx";
import { MenuAdmin } from "./components/Admin/MenuAdmin.jsx";
import { Dashboard } from "./components/Admin/secciones/Dashboard.jsx";
// import { CreateCollection } from "./components/CreateNft/CreateCollection.jsx";
// import PrivateRoute from './services/getPrivateRoute'
import { Register } from "./components/Register/Register.jsx";
import Collections from "./components/Collections/Collections.jsx";
import { Admin } from "./components/Admin/Admin.jsx";
// import  Admin  from "./components/Admin/admin/AdminApp";
import CardNftCollection from "./components/Collections/CardNftCollection.jsx";
import "./App.css";
import { MisPublicaciones } from "./components/ViewUser/Publicaciones/MisPublicaciones.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import About from "./components/about/About";
function MainLayout() {
  return (
    <div className="body-fondo">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const MainLayoutAdmin = () => {
  return (
    <div className="body-admin">
      <MenuAdmin />
      <Outlet />
    </div>
  );
};

function App() {
  const logged = useSelector((state) => state.isLogged);
  const user = useSelector((state) => state.user);

  // const usertype = user.user_type.name;

  return (
    <div className="App">
      <BrowserRouter>
      {/* <SoftUIControllerProvider> */}
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route element={<MainLayout />}>
            <Route
              exact
              path={"/myprofile/:idUser"}
              element={logged ? <ViewUser /> : <Home />}
            />
            <Route
              exact
              path={"/myprofile/mispublicaciones"}
              element={logged ? <MisPublicaciones /> : <Home />}
            />
            <Route
              exact
              path={"/home/createnft"}
              element={logged ? <CreateNft /> : <Home />}
            />
            <Route exact path={"/details/:idNft"} element={<Details />} />
            <Route exact path={"/nft"} element={<AllNft />} />

            <Route exact path={"/home"} element={<Home />} />
            <Route
              exact
              path={"/home/login"}
              element={!logged ? <Login /> : <Home />}
            />
            <Route exact path={"/home/register"} element={<Register />} />
            <Route exact path={"/home/collections"} element={<Collections />} />
            {/* <Route
              exact
              path={"/admin/create"}
              element={<CreateNftAdmin />}
            />
            <Route
              exact
              path={"/admin"}
              element={
                logged && user?.user_type.name === "admin" ? (
                  <Admin />
                ) : (
                  <Home />
                )
              }
            /> */}
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/home/login"} element={!logged ? <Login /> : <Home />} />
            <Route exact path={"/home/register"} element={<Register />} />
            <Route exact path={"/home/collections"} element={<Collections />} />
            <Route exact path={"/home/collections/nfts/:name"} element={<CardNftCollection />} />
            <Route
              exact
              path={"/home/collections/nfts/:name"}
              element={<CardNftCollection />}
            />
          </Route>
        </Routes>
        <Routes>
          <Route element={<MainLayoutAdmin />}>
            {/* <Route
              exact
              path={"/home/createnft/collectionCreated"}
              element={<CreateCollection />}
            /> */}
            <Route exact path={"/admin/create"} element={<CreateNftAdmin />} />
            <Route
              exact
              path={"/admin/menuadmin/tables"}
              element={
                logged && user?.user_type.name === "admin" ? (
                  <Admin />
                ) : (
                  <Admin />
                )
              }
            />
            <Route exact path={"/admin/menuadmin"} element={<MenuAdmin />} />
            <Route
              exact
              path={"/admin/menuadmin/dashboard"}
              element={<Dashboard />}
            />
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
