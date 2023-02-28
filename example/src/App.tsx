import React from "react";
import "./App.scss";
import { useDialog } from "promise-confirmation-dialog";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function App() {
  const { showDialog, dialog } = useDialog();

  const handleDownload = async () => {
    const confirmed = await showDialog(
      "Are you sure, you want to download page"
    );

    if (confirmed) {
      window.alert("Download...");
    }
  };

  return (
    <div className="App">
      <button className="button trigger" onClick={handleDownload}>
        Download Page
      </button>
      <Modal
        isOpen={dialog.isOpen}
        onRequestClose={dialog.cancel}
        style={customStyles}
      >
        <div className="dialog">
          {dialog.message}
          <div className="dialog-footer">
            <button className="button cancel" onClick={dialog.cancel}>
              Cancel
            </button>
            <button className="button confirm" onClick={dialog.confirm}>
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
