import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaDownload } from "react-icons/fa";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);

 
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost/backend/user/read.php");
      const data = await res.json();
      setUsers(data.users || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch("http://localhost/backend/user/delete.php", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const result = await res.json();
        Swal.fire("Deleted!", result.message, "success");
        fetchUsers();
      } catch (err) {
        Swal.fire("Error", "Failed to delete user", "error");
      }
    }
  };


  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/backend/user/update.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUser),
      });
      const result = await res.json();

      if (result.message.includes("success")) {
        Swal.fire("Updated!", result.message, "success");
        setEditUser(null);
        fetchUsers();
      } else {
        Swal.fire("Error", result.message, "error");
      }
    } catch (err) {
      Swal.fire("Error", "Update failed", "error");
    }
  };

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  // CSV Export
  const downloadCSV = () => {
    const csvRows = [["Name", "Email", "Date of Birth"]];
    users.forEach((user) => {
      csvRows.push([
        user.name,
        user.email,
        new Date(user.dob).toLocaleDateString(),
      ]);
    });

    const csvContent = csvRows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
  };

  return (
    <div className="card shadow-sm p-4 mt-4">
     

 
      <h2 className="mb-4">User List</h2>
<button className="btn btn-outline-success mb-3 d-flex align-items-center gap-2" onClick={downloadCSV}>
  <FaDownload />
  Download CSV
</button>


      {loading ? (
        <div>Loading...</div>
      ) : users.length === 0 ? (
        <div className="alert alert-warning">No users found.</div>
      ) : (
        <ul className="list-group">
          {users.map((user, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
            >
              <div>
                <strong>{user.name}</strong> <br />
                <small>{user.email}</small> <br />
                <small>DOB: {new Date(user.dob).toLocaleDateString()}</small>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Edit Modal */}
      {editUser && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <form onSubmit={handleEditSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit User</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setEditUser(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    placeholder="Name"
                    value={editUser.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    value={editUser.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="date"
                    name="dob"
                    className="form-control mb-2"
                    value={editUser.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setEditUser(null)}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
