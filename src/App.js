import "./styles.css";
import AppWrapper from "./AppWrapper";
import Tagline from "./Tagline";

import "./AppWrapper.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <AppWrapper />
        <Tagline />
      </div>
    </div>
  );
}
