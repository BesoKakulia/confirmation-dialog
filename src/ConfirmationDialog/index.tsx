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

  const showDialog = (message: string) => {
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

  return { showDialog, dialog };
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
