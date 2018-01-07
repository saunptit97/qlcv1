import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  render() {
    const tasks = this.props.tasks;
    const elmTask = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onUpdate={this.props.onUpdate}
          onDelete={this.props.onDelete}
        />
      );
    });
    return (
      <table className="table table-bordered table-hover m-t">
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten</th>
            <th>Trang thai</th>
            <th>Hanh dong</th>
          </tr>
        </thead>
        <tbody>{elmTask}</tbody>
      </table>
    );
  }
}
export default TaskList;
