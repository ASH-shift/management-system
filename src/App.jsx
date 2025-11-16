import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);

  const [userData] = useContext(AuthContext);  // contains {employees, admin}

  // Restore login on refresh
  useEffect(() => {
    if (!userData) return;

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setUser(parsed.role);
      setLoggedInUserData(parsed.data);
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: null })
      );
      return;
    }

    // Employee login (FIXED)
    const employee = userData?.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard changeUser={setUser} />}

      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={LoggedInUserData} />
      )}
    </>
  );
};

export default App;
