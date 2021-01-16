import moment from "moment";
import avatar from "../../../assets/images/avatar-2.jpg";
export const header = [
  {
    id: 1,
    value: "Дата",
  },

  {
    id: 2,
    value: "Время",
  },

  {
    id: 3,
    value: "Длительность",
  },

  {
    id: 4,
    value: "Преподаватель",
  },

  {
    id: 5,
    value: "Предмет",
  },

  {
    id: 6,
    value: "Ссылка на урок",
  },
];

export const bodyItem = Array.from({length: 100}).map((_, index) => ({
  id: index + 1,
  date: moment(new Date()).format("L"),
  time: moment(new Date()).format("LT"),
  duration: "2 часа",
  img: avatar,
  name: "Olisha Farmer",
  subject: "Русский язык",
  link: "htpp://youtube.com",
}));
