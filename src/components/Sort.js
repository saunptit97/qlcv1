import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: ""
    };
  }
  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
    this.props.onSort(this.state.sort);
  };
  handle = () => {};
  render() {
    return (
      <div className="col-md-6">
        <select
          className="form-control"
          name="sort"
          onChange={this.onChange}
          value={this.state.sort}
        >
          <option>Sắp xếp</option>
          <option value="1" onClick={this.handle}>
            Theo ten tu A-Z
          </option>
          <option value="-1" onClick={this.handle}>
            Theo ten tu Z-A
          </option>
        </select>
      </div>
    );
  }
}
export default Sort;
