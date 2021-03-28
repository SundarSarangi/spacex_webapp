import "./App.css";

import SpaceXLanding from "./components/SpaceXLanding/SpaceXLanding";

function App() {
  return (
    <div className="App">
      <header>
        <p>SpaceX Launch Programs</p>
      </header>

      {/* <div className="main-content"> */}
        <SpaceXLanding />
      {/* </div> */}

      <footer>
        <p>Developed By: Sundar Sarangi</p>
      </footer>
    </div>
  );
}

export default App;
