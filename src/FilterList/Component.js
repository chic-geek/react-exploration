import React from "react";

class FilterList extends React.Component {
  state = {
    filterStr: "",
  };

  updateFilterStr = (e) => {
    this.setState({
      filterStr: e.target.value,
    });
  };

  render() {
    const filteredElements = this.props.items
      .filter((item) => item.toLowerCase().includes(this.state.filterStr.toLowerCase()))
      .map((item, key) => <li key={`${item}`}>{item}</li>);

    return (
      <div>
        <input type="text" value={this.state.filterStr} onChange={this.updateFilterStr} />
        {filteredElements.length === 0 && <p>There is no match!</p>}
        {filteredElements && <ul>{filteredElements}</ul>}
      </div>
    );
  }
}

export default FilterList;
