import { useContext, useState, createContext } from "react";

type DialogStateType = {
  message: string | null;
  isOpen: boolean;
  confirm: React.MouseEventHandler<HTMLButtonElement> | undefined;
  cancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const DEFAULT_STATE: DialogStateType = {
  isOpen: false,
  message: null,
  confirm: undefined,
  cancel: undefined,
};

type DialogContextType = [DialogStateType, (value: DialogStateType) => void];

const DialogContext = createContext<DialogContextType>([
  DEFAULT_STATE,
  (value: DialogStateType) => undefined,
]);
DialogContext.displayName = "DialogContext";

export function useDialog() {
  const [dialog, setDialog] = useContext(DialogContext);

  const confirm = (message: string) => {
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
  return dialog.isOpen ? (
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
  ) : null;
}

type Props = { children: React.ReactNode };

export function ConfirmationDialogProvider({ children }: Props) {
  const [dialog, setDialog] = useState(DEFAULT_STATE);

  return (
    <DialogContext.Provider value={[dialog, setDialog]}>
      {children}
    </DialogContext.Provider>
  );
}
