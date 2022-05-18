/**
 * Define a Toast Message.
 */
export interface ToastMessage {
  /**
   * Content of the message.
   */
  content: string;

  /**
   * ID of the asset used for the toast.
   */
  source?: number;
}

/**
 * Show a toast message.
 * @param {ToastMessage} message Message to show
 */
export function showToast(message: ToastMessage): void {
  window.enmity.toast.showToast(message);
}
