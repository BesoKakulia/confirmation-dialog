import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useState, createContext } from "react";
const DEFAULT_STATE = {
    isOpen: false,
    message: null,
    confirm: undefined,
    cancel: undefined,
};
const DialogContext = createContext([
    DEFAULT_STATE,
    (value) => undefined,
]);
DialogContext.displayName = "DialogContext";
export function useDialog() {
    const [dialog, setDialog] = useContext(DialogContext);
    const showDialog = (message) => {
        const promise = new Promise((resolve, reject) => {
            setDialog({
                message,
                isOpen: true,
                confirm: resolve,
                cancel: reject,
            });
        });
        return promise.then(() => {
            setDialog(Object.assign(Object.assign({}, dialog), { isOpen: false }));
            return true;
        }, () => {
            setDialog(Object.assign(Object.assign({}, dialog), { isOpen: false }));
            return false;
        });
    };
    return { showDialog, dialog };
}
export function ConfirmationDialogProvider({ children }) {
    const [dialog, setDialog] = useState(DEFAULT_STATE);
    return (_jsx(DialogContext.Provider, Object.assign({ value: [dialog, setDialog] }, { children: children })));
}
//# sourceMappingURL=index.js.map