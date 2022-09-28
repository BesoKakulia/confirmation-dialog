import { useDialog } from "promise-confirmation-dialog";

function ConfirmationDialogModal() {
  const { dialog } = useDialog();
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

export default ConfirmationDialogModal;
