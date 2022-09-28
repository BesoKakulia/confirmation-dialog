import { useContext, useState, createContext } from "react";

const DialogContext = createContext();
DialogContext.displayName = "DialogContext";

export function useDialog() {
  const [dialog, setDialog] = useContext(DialogContext);

  const confirm = (message) => {
    const promise = new Promise((resolve, reject) => {
      setDialog({
        message,
        isOpen: true,
        confirm: resolve,
        cancel: reject,
      });
    });

    return promise.then(
      () => {
        setDialog({ ...dialog, isOpen: false });
        return true;
      },
      () => {
        setDialog({ ...dialog, isOpen: false });
        return false;
      }
    );
  };

  return { confirm };
}

export function ConfirmationDialog() {
  const [dialog] = useContext(DialogContext);
  return (
    dialog.isOpen && (
      <div className="dialog">
        <div className="dialog-header">{dialog.message}</div>
        <div className="dialog-body"></div>
        <div className="dialog-footer">
          <button className="button confirm" onClick={dialog.confirm}>
            Confirm
          </button>
          <button className="button cancel" onClick={dialog.cancel}>
            Cancel
          </button>
        </div>
      </div>
    )
  );
}

export function ConfirmationDialogProvider({ children }) {
  const [dialog, setDialog] = useState({
    isOpen: false,
    message: null,
    confirm: null,
    cancel: null,
  });

  return (
    <DialogContext.Provider value={[dialog, setDialog]}>
      {children}
    </DialogContext.Provider>
  );
}
