import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
