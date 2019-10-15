/**
 * N O T E S
 */

/** [1] ==============================================================
 * The code INSIDE this function was inside the <Greeting />
 * component, but we've extracted it into it's own function for reuse.
 * Because this function makes use of state, we should define it as 
 * a hook.

 * [2] ==============================================================
 * This code could also sit inside the <Greeting /> component
 * but sometimes we'd like to test this code in isolation.

 * [3] ==============================================================
 * Formerly the handleNameChange and handleSurnameChange
 * methods in the <Greeting /> component.
 */

import { useState, useEffect } from 'react';

// [1]
export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    }
  }, [width])
  return width;
}

// [2]
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

// [3]
export function useFormUnput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}