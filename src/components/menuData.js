import {
  MdAccountBalance,
  MdBusinessCenter,
  MdDirectionsCarFilled,
  MdAirlineSeatReclineExtra,
  MdAssessment,
  MdPeople,
  MdPerson,
  MdStickyNote2,
} from "react-icons/md";
import { ImDatabase } from "react-icons/im";
import { RiCalendarTodoFill } from "react-icons/ri";

const menuData = {
  SuperAdmin: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance size={15} />,
      link: "/superadmin/dashboard",
    },
    {
      number: 2,
      name: "Organisations",
      icon: <MdBusinessCenter />,
      link: "/superadmin/organisations",
    },
    {
      number: 2,
      name: "Admins",
      icon: <MdPerson />,
      link: "/superadmin/admins",
    },
    {
      number: 2,
      name: "Supervisors",
      icon: <MdPerson />,
      link: "/superadmin/supervisors",
    },
    {
      number: 3,
      name: "Policies",
      icon: <MdDirectionsCarFilled />,
      link: "/superadmin/motor-third-party",
      subMenu: [
        {
          name: "MTP",
          link: "/superadmin/motor-third-party",
        },
        {
          name: "Comprehensive",
          link: "/superadmin/comprehensive",
        },
        {
          name: "Fire",
          link: "/superadmin/windscreen",
        },
        {
          name: "Travel",
          link: "/admin/new-import",
        },
        {
          name: "Agriculture",
          link: "/admin/transit",
        },
        {
          name: "Fidelity guarantee",
          link: "/admin/transit",
        },
        {
          name: "Public liability",
          link: "/admin/transit",
        },
        {
          name: "New imports",
          link: "/superadmin/new-import",
        },
        {
          name: "Transit",
          link: "/superadmin/transit",
        },
      ],
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/superadmin/claims",
    },
    {
      number: 5,
      name: "System Logs",
      icon: <ImDatabase />,
      link: "/superadmin/system-logs",
    },
  ],
  Admin: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/admin/dashboard",
    },
    {
      number: 2,
      name: "Organisations",
      icon: <MdBusinessCenter />,
      link: "/admin/organisations",
    },
    {
      number: 3,
      name: "Clients",
      icon: <MdPerson />,
      link: "/admin/clients",
    },
    {
      number: 4,
      name: "Sticker No.",
      icon: <MdStickyNote2 />,
      link: "/admin/sticker-management",
    },
    {
      number: 5,
      name: "Users",
      icon: <MdPeople />,
      link: "/admin/user-management",
      subMenu: [
        {
          name: "Agents",
          link: "/admin/agents",
        },
        {
          name: "Supervisor",
          link: "/admin/supervisors",
        },
        {
          name: "Log Trail",
          link: "/admin/view-log-trail",
        },
      ],
    },
    {
      number: 6,
      name: "Policies",
      icon: <MdDirectionsCarFilled />,
      link: "/admin/motor-third-party",
      subMenu: [
        {
          name: "Add Policy",
          link: "/admin/add-policy",
        },
        {
          name: "MTP",
          link: "/admin/motor-third-party",
        },
        {
          name: "Comprehensive",
          link: "/admin/comprehensive",
        },
        {
          name: "Fire",
          link: "/admin/windscreen",
        },
        {
          name: "Travel",
          link: "/admin/new-import",
        },
        {
          name: "Agriculture",
          link: "/admin/transit",
        },
        {
          name: "Fidelity guarantee",
          link: "/admin/transit",
        },
        {
          name: "Public liability",
          link: "/admin/transit",
        },
      ],
    },
    {
      number: 7,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/admin/claims",
    },
    {
      number: 8,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/admin/reports",
    },
  ],
  Supervisor: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/supervisor/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/supervisor/clients",
    },
    {
      number: 3,
      name: "Users",
      icon: <MdPeople />,
      link: "/supervisor/agents",
      subMenu: [
        {
          name: "Agents",
          link: "/supervisor/agents",
        },
        {
          name: "Log Trail",
          link: "/supervisor/view-log-trail",
        },
      ],
    },
    {
      number: 4,
      name: "Policies",
      icon: <MdDirectionsCarFilled />,
      link: "/supervisor/motor-third-party",
      subMenu: [
        {
          name: "MTP",
          link: "/supervisor/motor-third-party",
        },
        {
          name: "Comprehensive",
          link: "/supervisor/comprehensive",
        },
        {
          name: "Fire",
          link: "/supervisor/windscreen",
        },
        {
          name: "Travel",
          link: "/supervisor/windscreen",
        },
        {
          name: "Personal accident",
          link: "/supervisor/windscreen",
        },
        {
          name: "GPA",
          link: "/supervisor/windscreen",
        },
        {
          name: "New imports",
          link: "/supervisor/new-import",
        },
        {
          name: "Transit",
          link: "/supervisor/transit",
        },
      ],
    },
    {
      number: 5,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/supervisor/claims",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/supervisor/reports",
    },
  ],
  Agent: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "Policies",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/motor-third-party",
      subMenu: [
        {
          name: "MTP",
          link: "/agent/motor-third-party",
        },
        {
          name: "Comprehensive",
          link: "/agent/comprehensive",
        },
        {
          name: "Windscreen",
          link: "/agent/windscreen",
        },
        {
          name: "New imports",
          link: "/agent/new-import",
        },
        {
          name: "Transit",
          link: "/agent/transit",
        },
      ],
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
  Agent_mtp: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "MTP",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/motor-third-party",
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
  Agent_comprehensive: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "Comprehensive",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/comprehensive",
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
  Agent_windscreen: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "MTP",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/motor-third-party",
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
  Agent_newImport: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "New Import Policy",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/new-import",
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
  Agent_transit: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "Transit Policy",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/transit",
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
  Agent_mtp_comprehensive: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "Policies",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/motor-third-party",
      subMenu: [
        {
          name: "MTP",
          link: "/agent/motor-third-party",
        },
        {
          name: "Comprehensive",
          link: "/agent/comprehensive",
        },
      ],
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
  Agent_mtp_comprehensive_windscreen: [
    {
      number: 1,
      name: "Dashboard",
      icon: <MdAccountBalance />,
      link: "/agent/dashboard",
    },
    {
      number: 2,
      name: "Clients",
      icon: <MdPerson />,
      link: "/agent/clients",
    },
    {
      number: 3,
      name: "Policies",
      icon: <MdDirectionsCarFilled />,
      link: "/agent/motor-third-party",
      subMenu: [
        {
          name: "MTP",
          link: "/agent/motor-third-party",
        },
        {
          name: "Comprehensive",
          link: "/agent/comprehensive",
        },
        {
          name: "Windscreen",
          link: "/agent/windscreen",
        },
      ],
    },
    {
      number: 4,
      name: "Claims",
      icon: <MdAirlineSeatReclineExtra />,
      link: "/agent/claims",
    },
    {
      number: 5,
      name: "Log Trails",
      icon: <RiCalendarTodoFill />,
      link: "/agent/view-log-trail",
    },
    {
      number: 6,
      name: "Reports",
      icon: <MdAssessment />,
      link: "/agent/reports",
    },
  ],
};

export default menuData;
