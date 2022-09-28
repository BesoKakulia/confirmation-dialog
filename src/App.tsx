import React from "react";
import "./App.scss";
import {
  ConfirmationDialogProvider,
  ConfirmationDialog,
} from "./ConfirmationDialog";
import Users from "./List";

function App() {
  return (
    <div className="App">
      <ConfirmationDialogProvider>
        <Users />
        <ConfirmationDialog />
      </ConfirmationDialogProvider>
    </div>
  );
}

export default App;
