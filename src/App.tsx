import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="dialog">
        <div className="dialog-header">Hello World!</div>
        <div className="dialog-body"></div>
        <div className="dialog-footer">
          <button className="button confirm">Confirm</button>
          <button className="button cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default App;
