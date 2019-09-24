import React from 'react';
import { Editor } from 'slate-react';

class RichTextEditor extends React.Component {
  state = {
    value: this.props.initialValue,
  }

  onChange = ({ value }) => {
    this.setState({ value: value, });
  }

  onKeyDown = (event, editor, next) => {
    console.log(event.key);
    this.filterAmpersand(event, editor, next);
  }

  filterAmpersand = (event, editor, next) => {
    if (event.key !== '&') return next();
    event.preventDefault();
    editor.insertText('and');
  }

  render() {
    return (
      <Editor
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }

}

export default RichTextEditor;
