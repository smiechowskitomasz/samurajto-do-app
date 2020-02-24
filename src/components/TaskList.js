import React from "react";
import Task from "./Task";
const TaskList = props => {
  const active = props.tasks.filter(task => task.active === true);
  const done = props.tasks.filter(task => !task.active);
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />
  ));
  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia:</h1>
        {activeTasks.length > 0 ? activeTasks : <p>ALE JESTES GIT ZIOMUS</p>}
      </div>
      <hr />
      <div className="done">
        <h1>Zadania do zrobienia:({done.length})</h1>
        {done.length > 2 && <span>WYŚWIETLAMY TYLKO 2 OSTATNICH ZADAŃ</span>}
        {doneTasks.slice(0, 2)}
      </div>
    </>
  );
};

export default TaskList;
