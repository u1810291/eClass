import React from "react";
import styled from "styled-components";
import {useExpanded, useTable} from "react-table";

import makeData from "./makeData";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function SubRows({row, rowProps, visibleColumns, data, loading}) {
  if (loading) {
    return (
      <tr>
        <td />
        <td colSpan={visibleColumns.length - 1}>Loading...</td>
      </tr>
    );
  }

  return (
    <>
      {data.map((x, i) => (
        <tr {...rowProps} key={`${rowProps.key}-expanded-${i}`}>
          {row.cells.map((cell) => (
            <td {...cell.getCellProps()}>
              {cell.render(cell.column.SubCell ? "SubCell" : "Cell", {
                value: cell.column.accessor && cell.column.accessor(x, i),
                row: {...row, original: x},
              })}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function SubRowAsync({row, rowProps, visibleColumns}) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setData(makeData(3));
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SubRows row={row} rowProps={rowProps} visibleColumns={visibleColumns} data={data} loading={loading} />
  );
}

function Table({columns: userColumns, data, renderRowSubComponent}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state: {expanded},
  } = useTable(
    {
      columns: userColumns,
      data,
    },
    useExpanded
  );

  return (
    <>
      <pre>
        <code>{JSON.stringify({expanded}, null, 2)}</code>
      </pre>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <React.Fragment key={rowProps.key}>
                <tr {...rowProps}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
                {row.isExpanded && renderRowSubComponent({row, rowProps, visibleColumns})}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>
        Showing the first 20 results of
        {rows.length} rows
      </div>
    </>
  );
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: () => null,
        id: "expander",
        Cell: ({row}) => <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? "👇" : "👉"}</span>,
        SubCell: () => null,
      },
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: (d) => d.firstName,
            SubCell: (cellProps) => (
              <>
                🥳
                {cellProps.value} 🎉
              </>
            ),
          },
          {
            Header: "Last Name",
            accessor: (d) => d.lastName,
          },
          {
            Header: "Age",
            accessor: (d) => d.age,
          },
          {
            Header: "Visits",
            accessor: (d) => d.visits,
          },
          {
            Header: "Status",
            accessor: (d) => d.status,
          },
          {
            Header: "Profile Progress",
            accessor: (d) => d.progress,
          },
        ],
      },
      // {
      //   Header: 'Info',
      //   columns: [

      //   ]
      // }
    ],
    []
  );

  const data = React.useMemo(() => makeData(10), []);

  const renderRowSubComponent = React.useCallback(
    ({row, rowProps, visibleColumns}) => (
      <SubRowAsync row={row} rowProps={rowProps} visibleColumns={visibleColumns} />
    ),
    []
  );

  return (
    <Styles>
      <Table columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
    </Styles>
  );
}

export default App;
