import React from 'react';
import { Editor } from 'slate-react';

class RichTextEditor extends React.Component {
  state = {
    value: this.props.initialValue,
  }

  onChange = ({ value }) => {
    this.setState({ value: value, });
  }

  render() {
    return (
      <Editor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }

}

export default RichTextEditor;
