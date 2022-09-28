## **_React Confirmation Dialog_**

<br>

### Custom react confirmation dialog, that implenets native dialog interface. <br>

<br>

### Installation

`npm i promise-confirmation-dialog`

<br>

<br>

### Native 💩

<br>

```
function Component() {

    function delete() {
        const confirmed = window.confirm("Do you really want to delete 📦?")

        if(confirmed){
            ...process..
        }
    }

}

```

<br>

### Custom 🚀

<br>

```
import { useDialog } from "promise-confirmation-dialog";

function Component() { const { showDialog } = useDialog();

    async function delete() {
        const confirmed = await showDialog("Do you really want to delete 📦"?)

        if(confirmed){
            ...process..
        }
    }

}

```

<br>

### To use the custom confirmation dialog, you must wrap your app with context provider. 🚚

```

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


```
