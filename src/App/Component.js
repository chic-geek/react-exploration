import React from 'react';
import { Value } from 'slate';
import RichTextEditor from '../RichTextEditor/Component';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
})

function App() {
  return (
    <div>
      <h1>Slate testing</h1>
      <RichTextEditor initialValue={initialValue} />
    </div>
  );
}

export default App;
