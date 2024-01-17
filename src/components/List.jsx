import React from 'react';
import Item from './Item';


function List({state, onChange}) {
  if (!state) return;

  const deleteNotes = (e) => {
    e.preventDefault();
    if (!e.target.closest('button.crud__btn-delete')) return;
    onChange(e.target.closest('li').id);
  }

  return (
    <ul className='crud__list' onClick={deleteNotes}>
      {state.map((item, i) => <Item data={item} key={i} id={i}/>)}
    </ul>
  );
};

export default List;
