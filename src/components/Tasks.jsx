import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
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
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
