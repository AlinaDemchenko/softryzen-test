"use client";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function MobileMenu({children ,onToggleMenu }) {

  const mobileMenuContainer = document.getElementById('portal');

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    body.style.height = '100vh';
    return () => {
      body.style.overflow = 'auto';
      document.body.style.height = '';
    };
  }, []);


  return createPortal(
    <div className="fixed z-20 h-screen top-0 w-screen bg-[#010a0500]/75 px-5 py-[43px] backdrop-blur-[25px] overscroll-contain">
      <button
        className="mb-[110px] ml-auto block text-sm tracking-widest"
        type="button"
        onClick={onToggleMenu}
      >
        CLOSE
      </button>
     {children}
    </div>,
    mobileMenuContainer
  );
}

MobileMenu.propTypes = {
  children: PropTypes.node.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
