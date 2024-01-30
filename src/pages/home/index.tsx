import Modal from '@/components/common/Modal';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className='btn btn-primary'>Hello daisyUI!</button>
      lwejfoiawejfoaw!
      <button
        className='btn'
        onClick={() => {
          setIsOpen(true);
        }}>
        open modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Home;
