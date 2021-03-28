import "./App.css";

import {Strings} from "./strings/Strings";

import SpaceXLanding from "./components/SpaceXLanding/SpaceXLanding";

function App() {
  return (
    <div className="App">
      <header>
        <p>{Strings.AppName}</p>
      </header>

      <SpaceXLanding />

      <footer>
        <p>
          <strong>{Strings.DevelopedBy}</strong>: Sundar Sarangi
        </p>
      </footer>
    </div>
  );
}

export default App;
