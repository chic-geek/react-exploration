import React, { useState } from 'react';
import Modal from '../Modal';

export default function App() {
  const [isModal, setModal] = useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setModal(true)}>
        Open modal window
      </button>

      <Modal
        title="Modal title here..."
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        isVisible={isModal}
        onClose={() => setModal(false)}
      />
    </React.Fragment>
  );
}
