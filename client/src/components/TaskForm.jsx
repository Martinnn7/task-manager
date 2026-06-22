import { useState } from "react";

function TaskForm({
  userId,
  onTaskCreated,
  api,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", {
        title,
        description,
        userId,
      });

      setTitle("");
      setDescription("");

      setIsOpen(false);

      onTaskCreated();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#3d52a0] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2d3f7a] transition"
      >
        + Add Task
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-md p-6"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <h2 className="font-['Montserrat'] text-xl font-semibold text-slate-800 mb-5">
              Create Task
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Task Title"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Description
                </label>

                <textarea
                  rows="4"
                  placeholder="Task Description"
                  value={description}
                  onChange={(e) =>
                    setDescription(
                      e.target.value
                    )
                  }
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg px-4 py-2 text-sm font-medium transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-[#3d52a0] text-white hover:bg-[#2d3f7a] rounded-lg px-4 py-2 text-sm font-medium transition"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskForm;