import React, { useState } from 'react';

function App() {
  const [isFocused, setIsFocused] = useState(false);
  const containerColor = isFocused ? '#FF851B' : '#DDDDDD';

  function handleContainerFocus() {
    setIsFocused(true);
  }

  function handleContainerBlur() {
    setIsFocused(false);
  }

  return (
    <div>
      <h1>Testing React bubbling</h1>
      <MockInput name="Input" type="text" label="Test input" />

      <label htmlFor="message">Message</label><br />
      <div
        className="container"
        onFocus={handleContainerFocus}
        onBlur={handleContainerBlur}
        onClick={handleContainerFocus}
        onBlur={handleContainerBlur}
        style={{ border: `3px solid ${containerColor}`, marginBottom: '1rem' }}>
        <Toolbar />
        <Editor />
      </div>

      <MockInput name="Radio" type="radio" label="Test radio" />
    </div >
  );
}

function Toolbar() {
  return (
    <div className="toolbar">
      <button>B</button>
      <button>I</button>
      <button>U</button>
    </div>
  );
}

function Editor() {
  return (
    <div className="editor">
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </div>
  );
}

function MockInput(props) {
  return (
    <div className={`test${props.name}`} style={{ marginBottom: '1rem' }}>
      <label htmlFor={`test${props.name}`}>{props.label}</label>
      <input name={`test${props.name}`} id={`test${props.name}`} type={props.type} />
    </div>
  );
}

export default App;
