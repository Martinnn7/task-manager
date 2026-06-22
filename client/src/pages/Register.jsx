import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

import Header from "../components/Header";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <Header showLogout={false} />
      <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb]">
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-3xl font-[Montserrat] font-bold text-center text-[#1f2937] mb-6">
            Register
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d52a0]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d52a0]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d52a0]"
            />

            <button
              type="submit"
              className="w-full bg-[#3d52a0] hover:bg-[#2d3f7a] text-white py-2 rounded-lg font-medium transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-[#3d52a0] font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
