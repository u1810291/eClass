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
  Cell,
  TableContainer
} from './style';
import Pagination from '../Pagination';
import ToolTip from '../ToolTip';

export default ({
  columns: userColumns,
  data,
  renderRowSubComponent,
  total,
  setSort,
  toolTips
}) => {
  const [indexT, setIndexT] = useState(-1);
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
            {rows.map((row, index) => {
              prepareRow(row);
              const rowProps = row.getRowProps();
              return (
                <React.Fragment key={rowProps.key}>
                  <TR {...rowProps}>
                    {row.cells.map((cell) => (
                      <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
                    ))}
                    <TD right>
                      <Cell>
                        <ToolTip
                          indexT={indexT}
                          index={index}
                          itemId={row.original.id}
                          data={toolTips}
                          setIndexT={setIndexT}
                          // onClick={(key) => {
                          //   setIndexT(key);
                          // }}
                        />
                      </Cell>
                    </TD>
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
