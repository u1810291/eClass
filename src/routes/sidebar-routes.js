// import Examples from '../components/Examples';
import Balance from '../views/Student/Balance';
import Homeworks from '../views/Homeworks';
import Profile from '../views/Student/Profile';
import Quiz from '../views/Quiz';
import Grades from '../views/Student/Grades';
import Attendance from '../views/Student/Attendance';
import Payment from '../views/Student/Payment';
// import Library from '../views/Library';
// import Video from '../views/Video';
// import Connection from '../views/Student/Connection';
import Schedule from '../views/Shedule';
import Chat from '../views/Chat';
import Lesson from '../views/Student/Lesson';

export default [
  {
    exact: true,
    path: '/profile',
    component: Profile,
    icon: 'dashboard',
    title: 'Profile',
    children: []
  },
  {
    exact: true,
    path: '/lessons',
    component: Lesson,
    icon: 'classess2',
    title: 'Lessons',
    children: []
  },
  {
    exact: true,
    path: '/balance',
    component: Balance,
    icon: 'payment',
    title: 'Balance',
    children: []
  },
  {
    exact: true,
    path: '/homeworks',
    component: Homeworks,
    icon: 'homeworks',
    title: 'Homeworks',
    children: []
  },
  {
    exact: true,
    path: '/quiz',
    component: Quiz,
    icon: 'quiz',
    title: 'Quiz',
    children: []
  },
  {
    exact: true,
    path: '/grades',
    component: Grades,
    icon: 'grades',
    title: 'Grades',

    children: []
  },
  {
    exact: true,
    path: '/attendance',
    component: Attendance,
    icon: 'attendance',
    title: 'Attendance',
    children: []
  },
  {
    exact: true,
    path: '/payment',
    component: Payment,
    icon: 'balance',
    title: 'Payment',

    children: []
  },
  // {
  //   exact: true,
  //   path: '/library',
  //   component: Library,
  //   icon: 'library',
  //   title: 'Library',

  //   children: []
  // },
  // {
  //   exact: true,
  //   path: '/video',
  //   component: Video,
  //   icon: 'video-materials',
  //   title: 'Video',

  //   children: []
  // },
  // {
  //   exact: true,
  //   path: '/connection',
  //   component: Connection,
  //   icon: 'connection',
  //   title: 'Connection',

  //   children: []
  // },
  {
    exact: true,
    path: '/schedule',
    component: Schedule,
    icon: 'reschedule',
    title: 'Schedule',
    children: []
  },
  {
    exact: true,
    path: '/chat',
    component: Chat,
    icon: 'chat2',
    title: 'Chat',
    children: []
  }
  // {
  //   exact: true,
  //   path: '/support',
  //   component: Examples,
  //   icon: 'support2',
  //   title: 'Support',
  //   children: []
  // }
];
