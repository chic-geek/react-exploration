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
    this.createCodeSnippet(event, editor, next);
  }

  filterAmpersand = (event, editor, next) => {
    if (event.key !== '&') return next();
    event.preventDefault();
    editor.insertText('and');
  }

  createCodeSnippet = (event, editor, next) => {
    if (event.key !== '`' || !event.ctrlKey) return next();
    event.preventDefault();
    const isCode = editor.value.blocks.some((block) => block.type === "code");
    editor.setBlocks(isCode ? 'paragraph' : 'code');
  }

  renderBlock = (props, editor, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      default:
        return next();
    }
  }

  render() {
    return (
      <Editor
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        renderBlock={this.renderBlock}
      />
    );
  }
}

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>
        {props.children}
      </code>
    </pre>
  );
}

export default RichTextEditor;
