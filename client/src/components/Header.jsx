import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ showLogout = true}) {
  const navigate = useNavigate();
    
  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <header className="bg-[#7091e6] shadow-md">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-['Montserrat'] text-2xl font-bold text-white">
          Task Manager
        </h1>

        {showLogout && (<button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
        >
          <FaSignOutAlt />
          Logout
        </button> )}

      </div>
    </header>
  );
}

export default Header;