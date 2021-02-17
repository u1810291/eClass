/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  useExpanded, useTable, useSortBy, usePagination
} from 'react-table';
import {
  MainTableContainer,
  THead,
  TBody,
  TR,
  TD,
  Icon,
  TableContainer
} from './style';
import Pagination from '../Pagination';

export default ({
  columns: userColumns,
  data,
  renderRowSubComponent,
  total,
  setSort
}) => {
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

  const getIcon = (isSorted, isDesc) => ({
    down: isDesc,
    up: !isDesc,
    df: !isSorted
  });

  return (
    <>
      <TableContainer>
        <MainTableContainer {...getTableProps()}>
          <THead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {
                      column.render('Header')
                    }
                    {column.canSort && (
                      <Icon
                        {...getIcon(column.isSorted, column.isSortedDesc)}
                      />
                    )}
                  </th>
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
};
