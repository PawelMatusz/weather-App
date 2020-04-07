import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type='text'
        value={props.value}
        placeholder='Wpisz Miasto'
        onChange={props.change}
      />
    </form>
  );
};

export default Form;
