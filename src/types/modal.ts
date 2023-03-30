export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  render?: string;
  headerText?: string;
}
