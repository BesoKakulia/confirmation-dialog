import React from "react";
import "./App.scss";
import { ConfirmationDialogProvider } from "promise-confirmation-dialog";
import ConfirmationDialog from "./ConfirmationModal";
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
