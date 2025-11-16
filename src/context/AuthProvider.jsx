import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Initialize employees & admin only if not present
    if (
      !localStorage.getItem("employees") ||
      !localStorage.getItem("admin")
    ) {
      setLocalStorage(); // adds default admin + employees
    }

    const { employees, admin } = getLocalStorage();

    // FIX: Ensure employees array exists
    setUserData({
      employees: employees || [],
      admin: admin || null,
    });
  }, []);

  // Prevent children from rendering until context is ready
  if (!userData) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
