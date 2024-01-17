import React from 'react';


function Header({onChange}) {
  const updateList = (e) => {
    e.preventDefault();
    if (e.target) {
      onChange();
    }
  };

  return (
    <div className='crud__header'>
      <h2 className='crud__title'>Notes</h2>
      <button className='crud__btn crud__btn-update' type='button' onClick={updateList}></button>
    </div>
  );
};

export default Header;
