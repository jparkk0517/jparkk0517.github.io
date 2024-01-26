import { useRef } from 'react';

const Home = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className='btn btn-primary'>Hello daisyUI!</button>
      lwejfoiawejfoaw!
      <button
        className='btn'
        onClick={() => {
          if (!modalRef.current) return;
          modalRef.current.showModal();
        }}>
        open modal
      </button>
      <dialog id='my_modal_1' className='modal' ref={modalRef}>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>
            Press ESC key or click the button below to close
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Home;
