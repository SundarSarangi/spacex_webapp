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
        <p>
          <strong>Developed By</strong>: Sundar Sarangi
        </p>
      </footer>
    </div>
  );
}

export default App;
