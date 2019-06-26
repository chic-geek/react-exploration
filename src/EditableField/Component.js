import React from "react";

class EditableField extends React.Component {
  state = {
    isEditing: this.props.isEditing || false,
    text: this.props.text || "",
  };

  _handleFocus = () => {
    if (this.state.isEditing) {
      if (typeof this.props.onFocusOut === "function") {
        this.props.onFocusOut(this.state.text);
      }
    } else {
      if (typeof this.props.onFocus === "function") {
        this.props.onFocus(this.state.text);
      }
    }
    this.setState({ isEditing: !this.state.isEditing });
  };

  _handleChange = () => {
    this.setState({ text: this.textInput.value });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <input
            type="text"
            className={this.props.inputClassName}
            value={this.state.text}
            placholder={this.props.inputPlaceholder}
            onChange={this._handleChange}
            onBlur={this._handleFocus}
            ref={(input) => {
              this.textInput = input;
            }}
            autoFocus
          />
        </div>
      );
    }

    return (
      <div>
        <label className={this.props.labelClassName} onClick={this._handleFocus}>
          {this.state.text}
        </label>
      </div>
    );
  }
}

export default EditableField;
