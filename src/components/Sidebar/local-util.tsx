import Dashboard from "components/icons/dashboard";
import Home from "components/icons/home";
import Project from "components/icons/project";
import Report from "components/icons/report";
import Settings from "components/icons/settings";
import Support from "components/icons/support";
import Task from "components/icons/task";
import Users from "components/icons/users";

export const linksArray = [
  {
    label: "Home",
    icon: <Home />,
    id: 1,
  },

  {
    label: "Dashboard",
    icon: <Dashboard />,
    id: 2,
    show: true,
  },
  {
    label: "Projects",
    icon: <Project />,
    id: 3,
  },
  {
    label: "Tasks",
    icon: <Task />,
    id: 4,
  },

  {
    label: "Reporting",
    icon: <Report />,
    id: 5,
  },
  {
    label: "Users",
    icon: <Users />,
    id: 6,
  },
];

export const linksArray2 = [
  {
    label: "Support",
    icon: <Support/>,
    id: 5,
  },
  {
    label: "Settings",
    icon: <Settings />,
    id: 6,
  },
]
