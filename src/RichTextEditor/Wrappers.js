import React from 'react';

export function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>
        {props.children}
      </code>
    </pre>
  );
}

export function BoldMark(props) {
  return (
    <strong>
      {props.children}
    </strong>
  )
}