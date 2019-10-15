import React, { useState, useContext } from 'react';
import ThemeContext from '../context';
import Row from '../Row';

export default function Greeting() {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const theme = useContext(ThemeContext);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
  }

  return (
    <section style={{
      backgroundColor: `${theme.light.background}`,
      padding: '1rem',
    }}>
      <Row label="Name">
        <input
          id="Name"
          name="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </Row>

      <Row label="Surname">
        <input
          id="Surname"
          name="Surname"
          type="text"
          value={surname}
          onChange={handleSurnameChange}
        />
      </Row>
    </section>
  );
}