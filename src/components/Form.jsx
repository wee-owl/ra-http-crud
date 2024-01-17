import React from 'react';


function Form({onChange}) {
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target[0].value);
    e.target[0].value = '';
  }

  return (
    <form className="crud__form form" name='form' onSubmit={handleChange}>
      <div className="crud__form-content">
        <label htmlFor='textarea'>New Note</label>
        <textarea type='text' name="textarea" id="textarea" rows={5} required/>
      </div>
      <button className='crud__btn crud__btn-add' type='submit'></button>
    </form>
  );
};

export default Form;
