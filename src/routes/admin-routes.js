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
import Lesson from '../views/Admin/Lesson';
import Users from '../views/Admin/Users';
import StudentAdd from '../views/Admin/Users/Add/Student';
import TeacherAdd from '../views/Admin/Users/Add/Teacher';
import AdminAdd from '../views/Admin/Users/Add/Admin';
import ExternalWindow from '../views/ExternalWindow';

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
  {
    exact: true,
    path: '/library',
    component: Library,
    icon: 'library',
    title: 'Library',

    children: []
  },
  {
    exact: true,
    path: '/video',
    component: Video,
    icon: 'video-materials',
    title: 'Video',

    children: []
  },
  {
    exact: true,
    path: '/connection',
    component: Connection,
    icon: 'connection',
    title: 'Connection',
    children: []
  },
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
  },
  {
    exact: true,
    path: '/support',
    component: Examples,
    icon: 'support2',
    title: 'Support',
    children: []
  },
  {
    exact: true,
    path: '/subject',
    component: Examples,
    icon: 'dashboard',
    title: 'Subject',
    children: []
  },
  {
    exact: true,
    path: '/logs',
    component: Examples,
    icon: 'dashboard',
    title: 'Logs',
    children: []
  },
  {
    exact: true,
    path: '/users',
    component: Users,
    icon: 'dashboard',
    title: 'Users',
    children: [
      {
        path: '/add/student',
        title: 'Student',
        exact: true,
        hidden: true,
        component: StudentAdd
      },
      {
        path: '/add/teacher',
        title: 'Student',
        exact: true,
        hidden: true,
        component: TeacherAdd
      },
      {
        path: '/add/admin',
        title: 'Student',
        exact: true,
        hidden: true,
        component: AdminAdd
      }
    ]
  },
  {
    exact: true,
    path: '/tariff',
    component: Examples,
    icon: 'dashboard',
    title: 'Tariff',
    children: []
  },
  {
    exact: true,
    path: '/groups',
    component: Groups,
    icon: 'classess2',
    title: 'Groups',
    children: []
  },
  {
    exact: true,
    path: '/external',
    component: ExternalWindow,
    title: 'External',
    icon: 'dashboard',
    children: []
  }
];
