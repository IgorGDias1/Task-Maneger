import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left text-white p-2 rounded-md w-full ${
              task.isCompleted ? "bg-green-500" : "bg-slate-400"
            }`}
          >
            {task.title}
          </button>
          <button
            className={`text-white p-2 rounded-md ${
              task.isCompleted ? "bg-green-500" : "bg-slate-400"
            }`}
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className={`text-white p-2 rounded-md ${
              task.isCompleted ? "bg-green-500" : "bg-slate-400"
            }`}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
