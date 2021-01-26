import types from '../constants/action-types';
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
import Schedule from '../views/Teacher/Shedule';
import Chat from '../views/Chat';
import Error from '../components/Error';
import Groups from '../views/Groups';
import Lesson from '../views/Lesson';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../constants/roles';
import Users from '../views/Admin/Users';
/*

'CONFIRM_STUDENT',

'VIEW_RIGHTS_LIST',
'VIEW_ACCESS_RIGHTS_OF_ANY_USER',
'CREATE_ACCESS_RIGHT',
'UPDATE_ACCESS_RIGHT',
'DELETE_ACCESS_RIGHT',
'ASSIGN_ACCESS_RIGHT',
'DEASSIGN_ACCESS_RIGHT',
'CREATE_LIST_ITEM',
'UPDATE_LIST_ITEM',
'DELETE_LIST_ITEM',

*/
export const childRoutes = [
  {
    path: '/profile',
    component: Profile,
    icon: 'profile2',
    title: 'Profile',
    permissions: [
      types.UPDATE_ANY_STUDENT_PROFILE,
      types.UPDATE_ANY_TEACHER_PROFILE,
      types.UPDATE_ANY_ADMIN_PROFILE
    ],
    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/lessons',
    component: Lesson,
    icon: 'classess2',
    title: 'Lessons',
    permissions: [
      types.VIEW_ANY_LESSONS_LIST,
      types.CREATE_LESSON,
      types.UPDATE_LESSON,
      types.DELETE_LESSON,
      types.CANCEL_ANY_LESSON,
      types.RESCHEDULE_LESSON,
      types.RESCHEDULE_ANY_LESSON,
      types.START_ANY_LESSON,
      types.FINISH_ANY_LESSON
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/balance',
    component: Balance,
    icon: 'payment',
    title: 'Balance',
    permissions: [
      types.TOPUP_ACCOUNT,
      types.VIEW_ANY_TRANSACTION,
      types.VIEW_ANY_ACCOUNT
    ],
    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/homeworks',
    component: Homeworks,
    icon: 'homeworks',
    title: 'Homeworks',
    permissions: [
      types.VIEW_HOMEWORKS
    ],
    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/quiz',
    component: Quiz,
    icon: 'quiz',
    title: 'Quiz',
    permissions: [
      types.VIEW_QUIZ
    ],
    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/grades',
    component: Grades,
    icon: 'grades',
    title: 'Grades',
    permissions: [
      types.VIEW_GRADES
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/attendance',
    component: Attendance,
    icon: 'attendance',
    title: 'Attendance',
    permissions: [
      types.VIEW_ATTENDANCE
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/payment',
    component: Payment,
    icon: 'balance',
    title: 'Payment',
    permissions: [
      types.VIEW_PAYMENT
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/library',
    component: Library,
    icon: 'library',
    title: 'Library',
    permissions: [
      types.VIEW_LIBRARY
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/video',
    component: Video,
    icon: 'video-materials',
    title: 'Video',
    permissions: [
      types.VIEW_ANY_LESSONS_MATERIALS,
      types.UPLOAD_MATERIALS_FOR_ANY_TARGET,
      types.UPDATE_ANY_MATERIALS,
      types.DELETE_ANY_MATERIALS

    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/connection',
    component: Connection,
    icon: 'connection',
    title: 'Connection',
    permissions: [
      types.VIEW_CONNECTION

    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/schedule',
    component: Schedule,
    icon: 'reschedule',
    title: 'Schedule',
    permissions: [
      types.RESCHEDULE_LESSON,
      types.RESCHEDULE_ANY_LESSON

    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/chat',
    component: Chat,
    icon: 'chat2',
    title: 'Chat',
    permissions: [
      types.SEND_PERSONAL_MESSAGE,
      types.SEND_ROOM_MESSAGE,
      types.UPDATE_OWN_MESSAGE,
      types.DELETE_OWN_MESSAGE,
      types.CREATE_CHAT_ROOM,
      types.UPDATE_OWN_CHAT_ROOM,
      types.DELETE_OWN_CHAT_ROOM,
      types.VIEW_MEMBERS_IN_ANY_ROOM,
      types.ADD_USER_TO_ANY_ROOM,
      types.ADD_GROUP_TO_ANY_ROOM,
      types.ADD_USER_TO_MEMBER_ROOM,
      types.ADD_GROUP_TO_MEMBER_ROOM,
      types.DELETE_USER_FROM_ANY_ROOM,
      types.DELETE_GROUP_FROM_ANY_ROOM,
      types.DELETE_USER_FROM_MEMBER_ROOM,
      types.DELETE_GROUP_FROM_MEMBER_ROOM
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/support',
    component: Examples,
    icon: 'support2',
    title: 'Support',
    permissions: [
      types.VIEW_SUPPORT
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, STUDENT, TEACHER
    ]
  },
  {
    path: '/error',
    component: Error,
    icon: 'profile2',
    title: 'Error',
    permissions: [],

    children: [],
    role: []
  },
  {
    path: '/subject',
    component: Examples,
    icon: 'profile2',
    title: 'Subject',
    permissions: [
      types.VIEW_SUBJECTS_LIST,
      types.VIEW_ANY_SUBJECT,
      types.CREATE_SUBJECT,
      types.UPDATE_SUBJECT,
      types.DELETE_SUBJECT
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, TEACHER
    ]
  },
  {
    path: '/logs',
    component: Examples,
    icon: 'profile2',
    title: 'Logs',
    permissions: [
      types.VIEW_OWN_LOGS,
      types.VIEW_ANONYMOUS_LOGS,
      types.VIEW_ANY_LOGS],

    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },
  {
    path: '/users',
    component: Users,
    icon: 'profile2',
    title: 'Users',
    permissions: [
      types.REGISTER_STUDENT,
      types.REGISTER_TEACHER,
      types.REGISTER_ADMIN,
      types.UPDATE_STUDENT,
      types.UPDATE_TEACHER,
      types.UPDATE_ADMIN,
      types.DELETE_STUDENT,
      types.DELETE_TEACHER,
      types.DELETE_ADMIN,
      types.UPDATE_OWN_PROFILE,
      types.VIEW_ALL_STUDENTS_LIST,
      types.VIEW_ALL_TEACHERS_LIST,
      types.VIEW_ALL_ADMINS_LIST,
      types.VIEW_STUDENT_PROFILE,
      types.VIEW_TEACHER_PROFILE,
      types.VIEW_ADMIN_PROFILE
    ],

    children: [],
    role: [
      FIVEPLUSADMIN, TEACHER
    ]
  },
  {
    path: '/tariff',
    component: Examples,
    icon: 'profile2',
    title: 'Tariff',
    permissions: [
      types.VIEW_TARIFFS_LIST,
      types.VIEW_ANY_TARIFF,
      types.CREATE_TARIFF,
      types.UPDATE_TARIFF,
      types.DELETE_TARIFF
    ],

    children: [],
    role: [
      FIVEPLUSADMIN
    ]
  },

  {
    path: '/groups',
    component: Groups,
    icon: 'classess2',
    title: 'Groups',
    permissions: [
      types.VIEW_OWN_GROUP,
      types.VIEW_ANY_GROUP,
      types.CREATE_GROUP,
      types.UPDATE_GROUP,
      types.DELETE_GROUP,
      types.VIEW_ALL_GROUPS_LIST,
      types.VIEW_STUDENTS_IN_ANY_GROUP,
      types.ADD_STUDENTS_TO_ANY_GROUP,
      types.DELETE_STUDENTS_FROM_ANY_GROUP,
      types.VIEW_ANY_PHOTO,
      types.UPDATE_ANY_PHOTO,
      types.DELETE_ANY_PHOTO,
      types.UPLOAD_OWN_PHOTO,
      types.DELETE_OWN_PHOTO,
      types.UPLOAD_TEACHER_CERTIFICATE,
      types.DELETE_TEACHER_CERTIFICATE,
      types.VIEW_ALL_FILES_LIST,
      types.UPLOAD_ANY_FILE,
      types.VIEW_ANY_FILE,
      types.DELETE_ANY_FILE
    ],
    children: [],
    role: [
      FIVEPLUSADMIN, TEACHER
    ]
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
  // }
];
