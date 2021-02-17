/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useState, useCallback, useMemo
} from 'react';

import {
  useExpanded, useTable, useSortBy, usePagination
} from 'react-table';
import {
  Container,
  MainTableContainer,
  THead,
  TBody,
  TR,
  TD,
  SubTable,
  SubTD,
  TableContainer
} from './style';
import Spinner from '../Spinner';
import makeData from './makeData';
import Pagination from './Pagination';

function SubRows({
  row, rowProps, visibleColumns, data, loading
}) {
  if (loading) {
    return (
      <SubTable.Loading>
        <SubTD colSpan={visibleColumns.length - 1}>
          Loading...
        </SubTD>
      </SubTable.Loading>
    );
  }

  return (
    <>
      {data.map((x, i) => (
        <SubTable
          {...rowProps}
          // eslint-disable-next-line react/no-array-index-key
          key={`${rowProps.key}-expanded-${i}`}
        >
          {row.cells.map((cell) => (
            <SubTD
              {...cell.getCellProps()}
            >
              {cell.render(cell.column.SubCell ? 'SubCell' : 'Cell', {
                value:
                      cell.column.accessor
                      && cell.column.accessor(x, i),
                row: { ...row, original: x }
              })}
            </SubTD>
          ))}
        </SubTable>
      ))}
    </>
  );
}

function SubRowAsync({
  row, rowProps, visibleColumns
}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(makeData(2));
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

function Table({
  columns: userColumns,
  data,
  renderRowSubComponent,
  total,
  setSort
}) {
  const [pgCount, setPgCount] = useState(0);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    pageOptions,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy }

  } = useTable(
    {
      columns: userColumns,
      data,
      manualSortBy: true,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: true,
      pageCount: pgCount,
      autoResetPage: false
    },
    useSortBy,
    useExpanded,
    usePagination
  );
  useEffect(() => {
    const [sorted] = sortBy;
    setSort(sorted);
  }, [sortBy, setSort]);
  useEffect(() => {
    const count = Math.ceil(total / pageSize);
    setPgCount(count);
  }, [pageSize, total]);

  return (
    <>
      <TableContainer>
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
      </TableContainer>

      {total ? (
        <Pagination
          canPreviousPage={canPreviousPage}
          pageOptions={pageOptions}
          canNextPage={canNextPage}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageSize={pageSize}
          pageIndex={pageIndex}
        />
      ) : (
        <></>
      )}
    </>
  );
}

function App({
  data: tableData, header, loading, subData, total, setSort
}) {
  const columns = useMemo(() => header, [header]);
  const data = useMemo(() => tableData, [tableData]);

  const renderRowSubComponent = useCallback(
    ({ row, rowProps, visibleColumns }) => (
      <SubRowAsync
        row={row}
        subData={subData}
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
          setSort={setSort}
          total={total}
          columns={columns}
          data={data}
          renderRowSubComponent={renderRowSubComponent}
        />
      )}

    </Container>
  );
}

export default App;
