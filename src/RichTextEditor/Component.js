import React from 'react';
import { Editor } from 'slate-react';
import { CodeNode, BoldMark } from './Wrappers';
import { formatAmpersand, formatBold, formatCode } from './Formatters';

class RichTextEditor extends React.Component {
  state = {
    value: this.props.initialValue,
  }

  onChange = ({ value }) => {
    this.setState({ value: value, });
  }

  onKeyDown = (event, editor, next) => {
    console.log(event.key);

    switch (event.key) {
      case 'b': {
        formatBold(event, editor);
        break;
      }

      case '&': {
        formatAmpersand(event, editor, next);
        break;
      }

      case '`': {
        formatCode(event, editor, next);
        break;
      }

      default: {
        return next();
      }
    }
  }

  renderBlock = (props, editor, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      default:
        return next();
    }
  }

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
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
        renderMark={this.renderMark}
      />
    );
  }
}

export default RichTextEditor;
