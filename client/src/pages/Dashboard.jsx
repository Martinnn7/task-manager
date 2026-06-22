import { useEffect, useState } from "react";
import api from "../services/api";

import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";
import TaskList from "../components/TaskList";
import EditTask from "../components/EditTask";

import { FaClipboardList, FaTasks, FaCheckCircle } from "react-icons/fa";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [editTask, setEditTask] = useState(null);

  const totalTasks = tasks.length;
  const activeTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const fetchTasks = async () => {
    try {
      let url = `/tasks?userId=${user.id}`;

      if (search) {
        url += `&search=${search}`;
      }

      if (status !== "all") {
        url += `&status=${status}`;
      }

      const response = await api.get(url);

      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = async (id) => {
    try {
      await api.patch(`/tasks/${id}/toggle`);

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/tasks/${id}`);

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search, status]);

  return (
    <div>
      <Header />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Tasks</p>

                <h2 className="text-3xl font-bold text-slate-800 mt-1">
                  {totalTasks}
                </h2>
              </div>

              <FaClipboardList size={28} className="text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Active Tasks</p>

                <h2 className="text-3xl font-bold text-slate-800 mt-1">
                  {activeTasks}
                </h2>
              </div>

              <FaTasks size={28} className="text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Completed Tasks</p>

                <h2 className="text-3xl font-bold text-slate-800 mt-1">
                  {completedTasks}
                </h2>
              </div>

              <FaCheckCircle size={28} className="text-green-500" />
            </div>
          </div>
        </div>

        <TaskForm userId={user.id} api={api} onTaskCreated={fetchTasks} />

        <div className="flex mt-8 items-center gap-3 mb-4">
          <SearchBar search={search} setSearch={setSearch} />

          <FilterSelect status={status} setStatus={setStatus} />
        </div>

        {editTask && (
          <EditTask
            task={editTask}
            onTaskUpdated={() => {
              setEditTask(null);
              fetchTasks();
            }}
            onCancel={() => setEditTask(null)}
          />
        )}

        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={setEditTask}
        />
      </div>
    </div>
  );
}

export default Dashboard;
