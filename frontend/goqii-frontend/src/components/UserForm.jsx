import { useState } from "react";
import Swal from "sweetalert2";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/backend/user/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await response.text(); // debug-safe
      const result = JSON.parse(text);

      if (result.message === "User created successfully") {
        Swal.fire({
          title: "Success!",
          text: result.message,
          icon: "success",
          confirmButtonText: "OK",
        });
        // Optional: Clear form
        setFormData({ name: "", email: "", password: "", dob: "" });
      } else {
        Swal.fire({
          title: "Error!",
          text: result.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Request Failed!",
        text: err.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="card shadow-sm p-4">
      <h2 className="mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="name" value={formData.name} className="form-control" placeholder="Name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" value={formData.email} className="form-control" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="password" name="password" value={formData.password} className="form-control" placeholder="Password" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="date" name="dob" value={formData.dob} className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}
