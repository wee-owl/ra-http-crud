import React from 'react';


function Item(data) {
  return (
    <li className='crud__item' id={data.data.id}>
      <button className='crud__btn crud__btn-delete' type='button'></button>
      <p className='crud__content'>{data.data.content}</p>
    </li>
  );
};

export default Item;
