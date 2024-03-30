import { ReactNode, useEffect, useRef } from 'react';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  outsideClickClose?: boolean;
  title?: ReactNode;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  outsideClickClose = true,
}: IModal) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      modalRef.current?.close();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <dialog id="my_modal_1" className="modal" ref={modalRef}>
      {outsideClickClose && (
        <div
          className="dimmed absolute left-0 top-0 h-screen w-screen"
          onClick={onClose}
        />
      )}
      <div className="modal-box">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="py-4">{children}</p>
        <div className="modal-action">
          {/* <form method='dialog'> */}
          {onConfirm && (
            <button className="btn" onClick={onConfirm}>
              확인
            </button>
          )}
          <button className="btn" onClick={onClose}>
            닫기
          </button>
          {/* </form> */}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
