import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: " zagrac w Wiedzmina",
        date: "2018-02-25",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: " zagrac w Wiedzmina",
        date: "2018-02-25",
        important: true,
        active: true,
        finishDate: null
      },

      {
        id: 3,
        text: " zagrac w Wiedzmina",
        date: "2018-02-25",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: " zagrac w Wiedzmina",
        date: "2018-02-25",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };
  deleteTask = id => {
    console.log("delete" + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    console.log("change" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };
  render() {
    return (
      <div className="APP">
        TO DO LIST
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
