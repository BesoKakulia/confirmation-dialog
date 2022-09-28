### **_React Confirmation Dialog_**

<br>

Custom react confirmation dialog, that implenets native dialog interface. <br>

```
Native
function Component() {

    function delete() {
        const confirmed = window.confirm("Do you really want to delete 📦?")

        if(confirmed){
            ...process..
        }
    }
}


Custom

import { useDialog } from "promise-confirmation-dialog";


function Component() {
    const { showDialog } = useDialog();

    async function delete() {
        const confirmed = await showDialog("Do you really want to delete 📦"?)

        if(confirmed){
            ...process..
        }
    }
}

```

<br>

To use the custom confirmation dialog, you must wrap your app with context provider.

```
import { ConfirmationDialogProvider } from "promise-confirmation-dialog";

function App() {
   <div className="App">
      <ConfirmationDialogProvider>
        ...
      </ConfirmationDialogProvider>
    </div>
}
```
