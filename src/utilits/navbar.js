import AddProject from "../components/AddProject";
import AddTask from "../components/AddTask";
import Home from "../components/Home";

export const data = [
  {
    id: 1,
    title: "home",
    path: "/home",
    Component: Home,
  },
  {
    id: 2,
    title: "Add Projects",
    path: "/add-projects",
    Component: AddProject,
  },
  {
    id: 3,
    title: "Add Tasks",
    path: "/add-tasks",
    Component: AddTask,
  },
];
