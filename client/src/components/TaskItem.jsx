function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-md rounded-xl w-full p-4 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
            task.completed
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          }`}
        >
          {task.completed ? "Completed" : "Active"}
        </button>
      </div>

      <h3 className="font-['Montserrat'] text-[30px] font-semibold text-slate-800">
        {task.title}
      </h3>

      <p className="text-md text-slate-500 mt-1 mb-4">
        {task.description || "No description provided"}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="border border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
