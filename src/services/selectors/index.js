export const authSelector = (promise) =>
  new Promise((res, rej) => {
    promise
      .then(({data}) => {
        res(data);
      })
      .catch(rej);
  });
