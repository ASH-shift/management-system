import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category: category,
    active: true,
    newTask: true,
    completed: false,
    failed: false,
  };

  // Find the employee by firstName (case-insensitive)
  const employeeIndex = userData.employees.findIndex(
    (emp) => emp.firstName.toLowerCase() === assignTo.toLowerCase()
  );

  if (employeeIndex === -1) {
    alert("Employee not found! Please enter a valid employee name.");
    return;
  }

  // Clone employees array
  const updatedEmployees = [...userData.employees];

  const emp = updatedEmployees[employeeIndex];

  // Push new task
  emp.tasks.push(newTask);

  // Update taskCount
  emp.taskCount.newTask += 1;
  emp.taskCount.active += 1;

  // Save updated employees to context
  setUserData({
    ...userData,
    employees: updatedEmployees,
  });

  // Save to localStorage
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  // Clear fields
  setTaskTitle("");
  setTaskDescription("");
  setTaskDate("");
  setAssignTo("");
  setCategory("");

  alert(`Task assigned to ${emp.firstName} successfully!`);
};

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">

        {/* LEFT SIDE */}
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent 
                         border border-gray-400 mb-4 text-white 
                         placeholder:text-gray-500 focus:border-emerald-500"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent 
                         border border-gray-400 mb-4 text-white 
                         placeholder:text-gray-500 focus:border-emerald-500"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent 
                         border border-gray-400 mb-4 text-white 
                         placeholder:text-gray-500 focus:border-emerald-500"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent 
                         border border-gray-400 mb-4 text-white 
                         placeholder:text-gray-500 focus:border-emerald-500"
              type="text"
              placeholder="designer"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent 
                       border border-gray-400 text-white 
                       placeholder:text-gray-500 focus:border-emerald-500"
            placeholder="Write description..."
          ></textarea>

          <button
            className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full"
            type="submit"
          >
            Create Task
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateTask;
