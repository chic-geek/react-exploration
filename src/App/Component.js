import React from 'react';
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'
import useClickOutside from '../hooks/useClickOutside';

const initialValue = Plain.deserialize('Hello World!');

function App() {
  const containerRef = React.useRef();
  const toolbarRef = React.useRef();
  const editorRef = React.useRef();

  const [value, setValue] = React.useState(initialValue);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const handleContainerFocus = (e) => {
    if (isFocused) return;
    setIsFocused({ isFocused: true });
    editorRef.current.focus();
  };

  const handleClickOutsideContainer = () => {
    setIsFocused(false);
  };

  const handleEditorChange = (change) => {
    setValue(change.value);
  };

  const handleFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useClickOutside(containerRef, handleClickOutsideContainer);

  return (
    <div className="page">
      <div style={{ marginBottom: '2rem' }}>
        <input type="text" />
      </div>

      <div
        ref={containerRef}
        className={`container rte ${isFocused ? 'isFocused' : ''} ${isFullscreen ? 'isFullscreen' : ''}`}
        tabIndex="0"
        onClick={handleContainerFocus}
        onFocus={handleContainerFocus}
      >

        <div
          ref={toolbarRef}
          className="wrapper toolbarContainer"
        >
          <ul className="toolbarIcons">
            <li><button className="toolbarIcon">B</button></li>
            <li><button className="toolbarIcon">U</button></li>
            <li><button className="toolbarIcon">I</button></li>
          </ul>

          <ul className="toolbarIcons">
            <li><button className="toolbarIcon">@</button></li>
            <li><button className="toolbarIcon">#</button></li>
            <li><button className="toolbarIcon">$</button></li>
          </ul>

          <ul className="toolbarIcons">
            <li><button className="toolbarIcon">&#10000;</button></li>
            <li><button className="toolbarIcon">&#8635;</button></li>
            <li><button className="toolbarIcon" onClick={handleFullScreen}>&#8690;</button></li>
          </ul>
        </div>

        <div className="wrapper editorContainer">
          <Editor
            ref={editorRef}
            className="editor"
            value={value}
            onChange={handleEditorChange}
          />
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <input type="text" />
      </div>
    </div >
  );
}

export default App;


// handleContainerFocus = (e) => {
  //   this.setState({ isFocused: true });
  // }

  // handleContainerBlur = (e) => {
  //   console.log('handleContainerBlur fired');

  //   if (e.target.className === 'editor') {
  //     this.editorRef.current.focus();
  //     return;
  //   } else {
  //     this.setState({
  //       isFocused: false,
  //     });
  //   }
  // }
