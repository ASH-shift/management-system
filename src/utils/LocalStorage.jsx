
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the weekly sales data and prepare the performance summary.",
        date: "2025-11-10",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Call clients to get feedback on recent project delivery.",
        date: "2025-11-09",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CRM Entries",
        description: "Ensure all client data is up to date in the CRM system.",
        date: "2025-11-08",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Meeting",
        description: "Join the design sync with the UI/UX team.",
        date: "2025-11-11",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prototype Update",
        description: "Update prototype screens based on feedback from last review.",
        date: "2025-11-10",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Documentation Cleanup",
        description: "Organize the project documentation and update README.",
        date: "2025-11-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "UI Consistency Check",
        description: "Check app UI consistency across all pages.",
        date: "2025-11-12",
        category: "Quality Assurance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Krishna",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Backend API Testing",
        description: "Test all API endpoints for bugs and performance.",
        date: "2025-11-11",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review merge requests for the backend team.",
        date: "2025-11-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Database Optimization",
        description: "Optimize SQL queries for faster response time.",
        date: "2025-11-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Server Deployment",
        description: "Deploy updated code to the production server.",
        date: "2025-11-12",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "API Documentation",
        description: "Update API endpoints documentation with new parameters.",
        date: "2025-11-08",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Ishaan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Social Media Plan",
        description: "Create a social media calendar for the next month.",
        date: "2025-11-11",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Blog Article",
        description: "Write an article about product updates.",
        date: "2025-11-10",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Email Campaign",
        description: "Design and send the promotional email for new subscribers.",
        date: "2025-11-09",
        category: "Email",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Rudra",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "App Feature Testing",
        description: "Test the new login and signup flow.",
        date: "2025-11-12",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Fixing",
        description: "Fix minor UI bugs in the dashboard component.",
        date: "2025-11-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "User Feedback Review",
        description: "Go through customer feedback and create improvement list.",
        date: "2025-11-10",
        category: "Feedback",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Performance Monitoring",
        description: "Check application performance logs and metrics.",
        date: "2025-11-12",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123"
};

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};


