import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '../context';
import Row from '../Row';
import { useWindowWidth, useDocumentTitle, useFormUnput } from './hooks';

export default function Greeting() {
  const name = useFormUnput('Mary');
  const surname = useFormUnput('Poppins');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  useDocumentTitle(name.value + ` ` + surname.value);

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
          {...name}
        />
      </Row>

      <Row label="Surname">
        <input
          id="Surname"
          name="Surname"
          type="text"
          {...surname}
        />
      </Row>

      <Row label="Surname">
        {width}
      </Row>
    </section>
  );
}