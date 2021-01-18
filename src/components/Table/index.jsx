/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useState, useCallback, useMemo
} from 'react';

import { useExpanded, useTable } from 'react-table';
import { Styles } from './style';
import makeData from './makeData';

function SubRows({
  row, rowProps, visibleColumns, data, loading
}) {
  if (loading) {
    return (
      <tr>
        <td />
        <td colSpan={visibleColumns.length - 1}>
          Loading...
        </td>
      </tr>
    );
  }

  return (
    <>
      {data.map((x, i) => (
        <tr
          {...rowProps}
          // eslint-disable-next-line react/no-array-index-key
          key={`${rowProps.key}-expanded-${i}`}
        >
          {row.cells.map((cell) => (
            <td
              {...cell.getCellProps()}
            >
              {cell.render(cell.column.SubCell ? 'SubCell' : 'Cell', {
                value:
                      cell.column.accessor
                      && cell.column.accessor(x, i),
                row: { ...row, original: x }
              })}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function SubRowAsync({ row, rowProps, visibleColumns }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(makeData(1));
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SubRows
      row={row}
      rowProps={rowProps}
      visibleColumns={visibleColumns}
      data={data}
      loading={loading}
    />
  );
}

function Table({ columns: userColumns, data, renderRowSubComponent }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns
  } = useTable(
    {
      columns: userColumns,
      data
    },
    useExpanded
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <React.Fragment key={rowProps.key}>
                <tr {...rowProps}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
                {row.isExpanded
                && renderRowSubComponent({ row, rowProps, visibleColumns })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
        SubCell: () => null // No expander on an expanded row
      },
      {

        Header: 'Date',
        accessor: (d) => d.firstName,
        SubCell: (cellProps) => (
          <>
            🥳
            {cellProps.value}
            {' '}
            🎉
          </>
        )
      },
      {
        Header: 'Time',
        accessor: (d) => d.lastName
      },
      {
        Header: 'Duration',
        accessor: (d) => d.age
      },
      {
        Header: 'Teacher',
        accessor: (d) => d.visits
      },
      {
        Header: 'Subject',
        accessor: (d) => d.status
      },
      {
        Header: 'Link',
        accessor: (d) => d.progress
      }
    ],
    []
  );

  const data = useMemo(() => makeData(10), []);

  const renderRowSubComponent = useCallback(
    ({ row, rowProps, visibleColumns }) => (
      <SubRowAsync
        row={row}
        rowProps={rowProps}
        visibleColumns={visibleColumns}
      />
    ),
    []
  );

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>
  );
}

export default App;
