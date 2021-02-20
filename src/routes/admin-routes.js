import Examples from '../components/Examples';
import Balance from '../views/Balance';
import Homeworks from '../views/Homeworks';
import Profile from '../views/Profile';
import Quiz from '../views/Quiz';
import Grades from '../views/Student/Grades';
import Attendance from '../views/Student/Attendance';
import Payment from '../views/Student/Payment';
import Library from '../views/Library';
import Video from '../views/Video';
import Connection from '../views/Student/Connection';
import Schedule from '../views/Shedule';
import Chat from '../views/Chat';
import Groups from '../views/Groups';
import Lesson from '../views/Student/Lesson';
import { FIVEPLUSADMIN } from '../constants/roles';
import Users from '../views/Admin/Users';
import AddUser from '../views/Admin/Users/Add';
import ExternalWindow from '../components/ExternalWindow';

export default [
  {
    exact: true,
    path: '/profile',
    component: Profile,
    icon: 'dashboard',
    title: 'Profile',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/lessons',
    component: Lesson,
    icon: 'classess2',
    title: 'Lessons',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/balance',
    component: Balance,
    icon: 'payment',
    title: 'Balance',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/homeworks',
    component: Homeworks,
    icon: 'homeworks',
    title: 'Homeworks',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/quiz',
    component: Quiz,
    icon: 'quiz',
    title: 'Quiz',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/grades',
    component: Grades,
    icon: 'grades',
    title: 'Grades',

    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/attendance',
    component: Attendance,
    icon: 'attendance',
    title: 'Attendance',

    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/payment',
    component: Payment,
    icon: 'balance',
    title: 'Payment',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/library',
    component: Library,
    icon: 'library',
    title: 'Library',

    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/video',
    component: Video,
    icon: 'video-materials',
    title: 'Video',

    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/connection',
    component: Connection,
    icon: 'connection',
    title: 'Connection',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/schedule',
    component: Schedule,
    icon: 'reschedule',
    title: 'Schedule',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/chat',
    component: Chat,
    icon: 'chat2',
    title: 'Chat',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/support',
    component: Examples,
    icon: 'support2',
    title: 'Support',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/subject',
    component: Examples,
    icon: 'profile2',
    title: 'Subject',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/logs',
    component: Examples,
    icon: 'profile2',
    title: 'Logs',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/users',
    component: Users,
    icon: 'profile2',
    title: 'Users',
    children: [
      {
        path: '/add/student',
        title: 'Student',
        exact: true,
        hidden: true,
        component: AddUser
      },
      {
        path: '/add/teacher',
        title: 'Student',
        exact: true,
        hidden: true,
        component: AddUser
      },
      {
        path: '/add/admin',
        title: 'Student',
        exact: true,
        hidden: true,
        component: AddUser
      }
    ],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/tariff',
    component: Examples,
    icon: 'profile2',
    title: 'Tariff',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/groups',
    component: Groups,
    icon: 'classess2',
    title: 'Groups',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    exact: true,
    path: '/external',
    component: ExternalWindow,
    title: 'External',
    icon: 'dashboard',
    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  }
];
