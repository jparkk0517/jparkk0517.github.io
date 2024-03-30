import { MENUS } from '@/common/constants';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Menu() {
  const router = useRouter();
  const checkBoxRef = useRef<HTMLInputElement>(null);
  const handleChangePage = (path: string) => {
    router.push(path);
    checkBoxRef.current?.click();
  };
  return (
    <div className="drawer absolute bottom-[5vh] left-5 z-30 w-0">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={checkBoxRef}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label className="btn btn-circle swap swap-rotate" htmlFor="my-drawer">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {/* <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="w-50 menu min-h-full bg-base-200 p-4 text-base-content">
          {/* Sidebar content here */}
          <li
            onClick={() => {
              handleChangePage(MENUS.WHO_AM_I);
            }}
          >
            <a>Sun, 누구냐 너</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
