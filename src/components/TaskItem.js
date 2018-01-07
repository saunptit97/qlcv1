import React, { Component } from "react";

class TaskItem extends Component {
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };
  render() {
    const task = this.props.task;
    const index = this.props.index;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td>{task.status === true ? "Kich hoat" : "An"}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <i className="fa fa-edit" /> Sua
          </button>
          <button
            type="button"
            className="btn btn-danger m-l"
            onClick={this.onDelete}
          >
            <i className="fa fa-remove" /> Xoa{" "}
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;
