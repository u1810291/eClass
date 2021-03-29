import Examples from '../components/Examples';
import Balance from '../views/Balance';
import Profile from '../views/Profile';
import Payment from '../views/Student/Payment';
import Library from '../views/Library';
import Chat from '../views/Chat';
import Groups from '../views/Admin/Groups';
import Lesson from '../views/Admin/Lesson';
import Users from '../views/Admin/Users';
import StudentAdd from '../views/Admin/Users/Add/Student';
import TeacherAdd from '../views/Admin/Users/Add/Teacher';
import AdminAdd from '../views/Admin/Users/Add/Admin';

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
    path: '/groups',
    component: Groups,
    icon: 'classess2',
    title: 'Groups',
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
        title: 'Teacher',
        exact: true,
        hidden: true,
        component: TeacherAdd
      },
      {
        path: '/add/admin',
        title: 'Admin',
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
    path: '/example',
    component: Examples,
    icon: 'dashboard',
    title: 'Tariff',
    children: []
  }
];
