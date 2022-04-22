import {Route, Routes} from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<LandingPage/>}></Route>
        <Route exact path={"/home"} element={<Home/>}></Route>
      </Routes>
      <h1>Hola mundo!</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
