import { ReactNode, useEffect, useRef } from 'react';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  outsideClickClose?: boolean;
  title?: ReactNode;
  content?: ReactNode;
}

const Modal = ({
  isOpen,
  title,
  content,
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
    <dialog id='my_modal_1' className='modal' ref={modalRef}>
      {outsideClickClose && (
        <div
          className='dimmed w-screen h-screen absolute top-0 left-0'
          onClick={onClose}
        />
      )}
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p className='py-4'>{content}</p>
        <div className='modal-action'>
          {/* <form method='dialog'> */}
          {onConfirm && (
            <button className='btn' onClick={onConfirm}>
              확인
            </button>
          )}
          <button className='btn' onClick={onClose}>
            닫기
          </button>
          {/* </form> */}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
