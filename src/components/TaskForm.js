import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: true
    };
  }
  closeForm = () => {
    this.props.closeForm();
  };
  handleChange = e => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "status") {
      value = e.target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.closeForm();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: true
    });
  };
  componentWillMount = () => {
    if (this.props.editTask) {
      this.setState({
        id: this.props.editTask.id,
        name: this.props.editTask.name,
        status: this.props.editTask.status
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editTask) {
      this.setState({
        id: nextProps.editTask.id,
        name: nextProps.editTask.name,
        status: nextProps.editTask.status
      });
    }
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h2 className="panel-title">
            Them cong viec{" "}
            <i className="fa fa-close m-l-200" onClick={this.closeForm} />
          </h2>
        </div>
        <div className="panel-body">
          <form
            className="table table-bordered table-hover"
            onSubmit={this.handleSubmit}
          >
            <label>Ten: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
            <label>Trang thai</label>
            <select
              className="form-control"
              name="status"
              onChange={this.handleChange}
              value={this.state.status}
              required
            >
              <option value={true}>Kich hoat</option>
              <option value={false}>An</option>
            </select>
            <br />
            <button type="submit" className="btn btn-warning">
              <i className="fa fa-save" /> Luu lai
            </button>
            <button
              type="button"
              className="btn btn-danger m-l "
              onClick={this.onClear}
            >
              <i className="fa fa-close" /> Huy bo{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default TaskForm;
