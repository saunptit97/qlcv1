import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplay: false,
      editTask: null,
      filter: {
        name: ""
      },
      keyword: "",
      sort: 0
    };
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(1);
  }
  generateRandom() {
    return this.s4() + "-" + this.s4() + "+" + this.s4();
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }
  openForm = () => {
    if (this.state.editTask !== null) {
      this.setState({
        editTask: null
      });
    }
    this.setState({
      isDisplay: true
    });
  };
  closeForm = () => {
    this.setState({
      isDisplay: false
    });
  };
  onSubmit = data => {
    var { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateRandom();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onUpdate = id => {
    this.openForm();
    let tasks = this.state.tasks;
    let index = this.findIndex(id);
    let editTask = tasks[index];
    this.setState({
      editTask: editTask
    });
    console.log(editTask);
  };
  onDelete = id => {
    let tasks = this.state.tasks;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  findIndex = id => {
    let result = -1;
    let tasks = this.state.tasks;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  onSearch = keyword => {
    this.setState({
      keyword: keyword.toLowerCase(),
      filter: {
        name: keyword.toLowerCase()
      }
    });
  };
  onSort = value => {
    console.log(value);
    this.setState({
      sort: value
    });
  };
  render() {
    let tasks = this.state.tasks;
    let keyword = this.state.keyword;
    let sort = this.state.sort;
    let elmTaskForm = this.state.isDisplay ? (
      <TaskForm
        closeForm={this.closeForm}
        onSubmit={this.onSubmit}
        editTask={this.state.editTask}
      />
    ) : (
      ""
    );
    //Search
    if (keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    //Sort
    if (sort !== 0) {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort;
        if (a.name < b.name) return -sort;
        if (a.name === b.name) return 0;
      });
    }
    return (
      <div className="container">
        <h2 className="text-center">Quan ly cong viec</h2>
        <div className="row m-t">
          <div className="col-md-4">{elmTaskForm}</div>
          <div className={this.state.isDisplay ? "col-md-8" : "col-md-12"}>
            <button className="btn btn-primary" onClick={this.openForm}>
              <i className="fa fa-plus" /> Them cong viec
            </button>

            <br />
            <Control onSearch={this.onSearch} onSort={this.onSort} />
            <TaskList
              tasks={tasks}
              onUpdate={this.onUpdate}
              onDelete={this.onDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
