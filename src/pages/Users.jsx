import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || [];

    // Deduplicate by username (case-insensitive), keeping first occurrence
    const unique = [];
    const seen = new Set();
    for (const u of saved) {
      const key = (u.username || "").trim().toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(u);
      }
    }

    if (unique.length !== saved.length) {
      // Persist cleaned list back to storage
      localStorage.setItem("users", JSON.stringify(unique));
    }

    setUsers(unique);
  }, []);

  return (
    <div className="flex min-h-screen bg-eggBg px-4 py-6 md:px-8">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-4 pt-0 overflow-x-hidden">
        <Topbar />

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Users</h1>

          {users.length === 0 ? (
            <div className="bg-white shadow rounded-xl p-6 text-center text-gray-500">
              No users found.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {users.map((u) => (
                <div
                  key={u.id}
                  className="bg-white shadow rounded-xl p-5 border hover:shadow-md transition"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {u.fullName}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    @{u.username}
                  </p>

                  <div className="text-sm text-gray-700 space-y-1">
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {u.phone}
                    </p>
                    <p>
                      <span className="font-medium">Role:</span>{" "}
                      {Array.isArray(u.roles) ? u.roles.join(", ") : u.role}
                    </p>
                  </div>

                  {/* Optional actions */}
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs px-3 py-1 rounded-lg border hover:bg-gray-50">
                      Edit
                    </button>
                    <button className="text-xs px-3 py-1 rounded-lg border text-red-600 hover:bg-red-50">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
