import React from 'react';
import useInput from '../hooks/useInput';

export default function NameForm(props) {
  const { bind, reset } = useInput('');

  console.log('bind', bind);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting name: ${bind.value}`);
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
         <input type="text" {...bind} />
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
}
