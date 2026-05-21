import { useState } from "react";
import Tasks from "../componentes/Tasks.jsx";
import AddTasks from "../componentes/AddTasks.jsx";
import { v4 } from "uuid";
import { useEffect } from "react";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../componentes/Title.jsx";
import { useNavigate } from "react-router-dom";

function AddTaskPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  function onAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="my-4 w-[500px] space-y-4 p-6">
        <Title className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </Title>
        <AddTasks onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
        <button
          className="absolute left-90 top-14
           text-slate-100"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon />
        </button>
      </div>
    </div>
  );
}

export default AddTaskPage;
