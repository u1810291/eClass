import React, {useMemo} from "react";
import {Container} from "./style";
import makeData from "./makeData";

export default () => {
  const columns = useMemo(
    () => [
      {
        id: "expander",
        Header: ({getToggleAllRowsExpandedProps, isAllRowsExpanded}) => (
          <span {...getToggleAllRowsExpandedProps()}>{isAllRowsExpanded ? "👇" : "👉"}</span>
        ),
        Cell: ({row}) =>
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? "👇" : "👉"}
            </span>
          ) : null,
      },
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(() => makeData(5, 5, 5), []);

  return (
    <Container>
      <Table columns={columns} data={data} />
    </Container>
  );
};
