import Examples from '../components/Examples';
import Courses from '../views/Student/Courses';
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
import Schedule from '../views/Teacher/Shedule';
import Chat from '../views/Chat';
import Error from '../components/Error';

export const childRoutes = [
  {
    path: '/profile',
    component: Profile,
    icon: 'profile2',
    title: 'Profile',
    permissions: [],
    children: []
  },
  {
    path: '/courses',
    component: Courses,
    icon: 'profile2',
    title: 'Courses',
    permissions: [],
    children: []
  },
  {
    path: '/balance',
    component: Balance,
    icon: 'payment',
    title: 'Balance',
    children: [],
    permissions: []
  },
  {
    path: '/homeworks',
    component: Homeworks,
    icon: 'homeworks',
    title: 'Homeworks',
    permissions: [],
    children: []
  },
  {
    path: '/quiz',
    component: Quiz,
    icon: 'quiz',
    title: 'Quiz',
    permissions: [],
    children: []
  },
  {
    path: '/grades',
    component: Grades,
    icon: 'grades',
    title: 'Grades',
    permissions: [],

    children: []
  },
  {
    path: '/attendance',
    component: Attendance,
    icon: 'attendance',
    title: 'Attendance',
    permissions: [],

    children: []
  },
  {
    path: '/payment',
    component: Payment,
    icon: 'balance',
    title: 'Payment',
    permissions: [],

    children: []
  },
  {
    path: '/library',
    component: Library,
    icon: 'library',
    title: 'Library',
    permissions: [],

    children: []
  },
  {
    path: '/video',
    component: Video,
    icon: 'video-materials',
    title: 'Video',
    permissions: [],

    children: []
  },
  {
    path: '/connection',
    component: Connection,
    icon: 'connection',
    title: 'Connection',
    permissions: [],

    children: []
  },
  {
    path: '/schedule',
    component: Schedule,
    icon: 'reschedule',
    title: 'Schedule',
    permissions: [],

    children: []
  },
  {
    path: '/chat',
    component: Chat,
    icon: 'chat2',
    title: 'Chat',
    permissions: [],

    children: []
  },
  {
    path: '/support',
    component: Examples,
    icon: 'support2',
    title: 'Support',
    permissions: [],

    children: []
  },
  {
    path: '/error',
    component: Error,
    icon: 'profile2',
    title: 'Error',
    permissions: [],

    children: []
  }
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // },
  // {
  //   path: '/examples',
  //   component: Examples,
  //   icon: 'profile2',
  //   title: 'Examples',
  //   permissions: [],

  //   children: []
  // }
];
