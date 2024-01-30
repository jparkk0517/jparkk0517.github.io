import Dropdown from '@/components/common/Dropdown';

const NavBar = () => {
  return (
    <div
      className='navbar bg-base-100 flex-col'
      style={{
        height: '5vh',
      }}>
      <div className='w-screen mb-4'>
        <Dropdown
          items={[<a key={'1'}>item1</a>, <a key={'2'}>item2</a>]}
          trigger={
            <div className='flex-none'>
              <button className='btn btn-square btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-5 h-5 stroke-current'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </button>
            </div>
          }
        />

        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>SunBlog</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
