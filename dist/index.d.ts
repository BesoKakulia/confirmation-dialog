import React from "react";
declare type DialogStateType = {
    message: string | null;
    isOpen: boolean;
    confirm: React.MouseEventHandler<HTMLButtonElement> | undefined;
    cancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export declare function useDialog(): {
    showDialog: (message: string) => Promise<boolean>;
    dialog: DialogStateType;
};
declare type Props = {
    children: React.ReactNode;
};
export declare function ConfirmationDialogProvider({ children }: Props): JSX.Element;
export {};
