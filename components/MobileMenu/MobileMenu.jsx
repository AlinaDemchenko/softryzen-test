"use client";
import PropTypes from 'prop-types';

function MobileMenu({children ,onToggleMenu }) {
  return (
    <div className="absolute z-20 h-screen w-screen bg-[#010a0500]/75 px-5 py-[43px] backdrop-blur-[25px]">
      <button
        className="mb-[110px] ml-auto block text-sm tracking-widest"
        type="button"
        onClick={onToggleMenu}
      >
        CLOSE
      </button>
     {children}
    </div>
  );
}

MobileMenu.propTypes = {
  children: PropTypes.node.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
