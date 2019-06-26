import React from "react";
import EditableField from "../EditableField";

class App extends React.Component {
  render() {
    return (
      <main>
        <div className="fieldItem">
          <strong>Firstname:</strong>
          <EditableField
            text="Chris"
            labelClassName="myLabelClass"
            inputClassName="myInputClass"
            onFocus={this._handleFocus}
            onFocusOut={this._handleFocusOut}
          />
        </div>

        <div className="fieldItem">
          <strong>Surname:</strong>
          <EditableField
            text="Brett"
            labelClassName="myLabelClass"
            inputClassName="myInputClass"
            onFocus={this._handleFocus}
            onFocusOut={this._handleFocusOut}
          />
        </div>

        <div className="fieldItem">
          <strong>Age:</strong>
          <EditableField
            text="34"
            labelClassName="myLabelClass"
            inputClassName="myInputClass"
            onFocus={this._handleFocus}
            onFocusOut={this._handleFocusOut}
          />
        </div>
      </main>
    );
  }
}

export default App;
