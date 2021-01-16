export const getInitials = (name, delimeter = ' ') => {
  // if (name) {
  //   const array = name.split(delimeter);

  //   switch (array.length) {
  //   case 1:
  //     return array[0].charAt(0).toUpperCase();
  //   default:
  //     return array[0].charAt(0).toUpperCase() + array[array.length - 1].charAt(0).toUpperCase();
  //   }
  // }
  // return false;

  const array = name.split(delimeter);
  let str = '';

  for (let i = 0; i < array.length; i += 1) {
    str += array[i][0].toUpperCase();
    if (i === 2) break;
  }

  return str;
};
