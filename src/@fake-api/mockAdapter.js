import MockAdapter from "axios-mock-adapter";

MockAdapter.prototype.getQuerParams = (url) => {
  const queryString = url.replace(/.*\?/, "");

  if (queryString === url || !queryString) {
    return null;
  }

  const urlParams = new URLSearchParams(queryString);
  const result = {};

  urlParams.forEach((val, key) => {
    if (result.hasOwnProperty(key)) {
      result[key] = [result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
};

MockAdapter.prototype.onGetPaginated = function (url) {
  const promise = ({ resolve, config, allData, status }) => {
    const { startRow = 0, endRow = 10 } = config;
    const data = allData.slice(startRow, endRow);
    const total = allData.length;
    const res = { total, data };
    resolve([status, res]);
  };
  const reply = (status, allData) =>
    this.onGet(url).reply(
      (config) =>
        new Promise((resolve) =>
          promise({
            resolve,
            config,
            allData,
            status,
          })
        )
    );
  return { reply };
};

export default MockAdapter;
