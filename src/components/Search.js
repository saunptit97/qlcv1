import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  onFillter = keyword => {};
  render() {
    let keyword = this.state.keyword;
    return (
      <div className="col-md-6">
        <div className="input-group">
          <input
            type="text"
            placeholder="Nhap tu khoa .."
            className="form-control"
            name="keyword"
            value={keyword}
            onChange={this.onChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={this.onSearch}>
              Tim
            </button>
          </span>
        </div>
      </div>
    );
  }
}
export default Search;
