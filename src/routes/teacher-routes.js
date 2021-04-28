import Examples from '../components/Examples';
import Balance from '../views/Teacher/Balance';
import Homeworks from '../views/Teacher/Homeworks';
import Profile from '../views/Teacher/Profile';
import Quiz from '../views/Teacher/Quiz';
import Grades from '../views/Teacher/Grades';
import Attendance from '../views/Teacher/Attendance';
import Schedule from '../views/Teacher/Schedule';
import Chat from '../views/Chat';
import Groups from '../views/Groups';
import Lesson from '../views/Teacher/Lesson';

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
    path: '/subject',
    component: Examples,
    icon: 'dashboard',
    title: 'Subject',
    children: []
  },
  {
    exact: true,
    path: '/groups',
    component: Groups,
    icon: 'classess2',
    title: 'Groups',
    children: []
  }

];
