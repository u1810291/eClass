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
import Lesson from '../views/Teacher/Lesson';
import { TEACHER } from '../constants/roles';
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
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
      TEACHER
    ]
  },
  {
    exact: true,
    path: '/subject',
    component: Examples,
    icon: 'dashboard',
    title: 'Subject',
    children: [],
    role: [
      TEACHER
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
      TEACHER
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
      TEACHER
    ]
  }
];
