import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        type="text"
        placeholder="Adicionar tarefa"
        className="border border-slate-500 p-2 rounded-md w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="border border-slate-500 p-2 rounded-md w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          // verificar se o título e a descrição foram preenchidos
          if (!title.trim() || !description.trim()) {
            alert("Preencha o título e a descrição da tarefa");
            return;
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 p-2 rounded-md w-full text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
