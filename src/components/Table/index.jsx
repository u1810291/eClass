/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useState, useCallback, useMemo
} from 'react';

import { useExpanded, useTable } from 'react-table';
import {
  Container, TR, THead, TBody, TD, MainTableContainer
} from './style';
import makeData from './makeData';
import Spinner from '../Spinner';

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
      <MainTableContainer {...getTableProps()}>
        <THead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </THead>
        <TBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <React.Fragment key={rowProps.key}>
                <TR {...rowProps}>
                  {row.cells.map((cell) => (
                    <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
                  ))}
                </TR>
                {row.isExpanded
                && renderRowSubComponent({ row, rowProps, visibleColumns })}
              </React.Fragment>
            );
          })}
        </TBody>
      </MainTableContainer>
    </>
  );
}

function App({ data: tableData, header, loading }) {
  const columns = useMemo(() => header, [header]);
  const data = useMemo(() => tableData, [tableData]);

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
    <Container>
      {loading ? (
        <Spinner contain black />
      ) : (
        <Table
          columns={columns}
          data={data}
          renderRowSubComponent={renderRowSubComponent}
        />
      )}
    </Container>
  );
}

export default App;
