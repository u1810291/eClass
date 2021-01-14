import React from "react";
import UserCell from "./CellUser";
import StatusCell from "./CellStatus";

export const headerMaker = (data) =>
  data
    .filter(({show}) => show)
    .map(({type, ...rest}) => {
      if (type === "user") {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          Cell: ({cell: {value}}) => <UserCell {...value} />,
        };
      }
      if (type === "status") {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          Cell: ({cell: {value}}) => <StatusCell {...value} />,
        };
      }
      return rest;
    });

export const getData = ({pageIndex, pageSize, setLoading, Service, asyncTask, setItems, setTotal}) => {
  setLoading(true);
  const startRow = pageSize * pageIndex;
  const endRow = startRow + pageSize;
  const promise = Service.getAll(startRow, endRow);
  asyncTask(promise).then((res) => {
    setItems(res.data);
    setTotal(res.total);
    setLoading(false);
  });
};
