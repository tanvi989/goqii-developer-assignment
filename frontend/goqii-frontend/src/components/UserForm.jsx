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

  const isValidEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const isValidDOB = (dob) => {
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, dob } = formData;

   
    if (!name || !email || !password || !dob) {
      return Swal.fire("Validation Error", "All fields are required.", "error");
    }

    if (!isValidEmail(email)) {
      return Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
    }

    if (password.length < 6) {
      return Swal.fire("Password Too Short", "Password must be at least 6 characters long.", "error");
    }

    if (!isValidDOB(dob)) {
      return Swal.fire("Invalid DOB", "User must be at least 18 years old.", "error");
    }

    try {
      const response = await fetch("http://localhost/backend/user/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await response.text(); 
      const result = JSON.parse(text);

      if (result.message === "User created successfully") {
        Swal.fire("Success", result.message, "success");
        setFormData({ name: "", email: "", password: "", dob: "" });
      } else {
        Swal.fire("Error", result.message, "error");
      }
    } catch (err) {
      Swal.fire("Request Failed", err.message, "error");
    }
  };

  return (
    <div className="card shadow-sm p-4">
      <h2 className="mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            className="form-control"
            placeholder="Enter your full name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            className="form-control"
            placeholder="example@domain.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            className="form-control"
            placeholder="Minimum 6 characters"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formData.dob}
            className="form-control"
            onChange={handleChange}
            required
          />
          <div className="form-text">User must be at least 18 years old.</div>
        </div>

        <button type="submit" className="btn btn-dark w-100">Submit</button>
      </form>
    </div>
  );
}
