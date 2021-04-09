export const getInitials = (name, delimeter = ' ') => {
  const array = name.split(delimeter);
  let str = '';

  for (let i = 0; i < array.length; i += 1) {
    if (i === 2) break;
    str += array[i][0].toUpperCase();
  }
  return str;
};
