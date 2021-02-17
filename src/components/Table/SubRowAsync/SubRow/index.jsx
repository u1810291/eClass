/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  SubTable,
  SubTD
} from './style';

export default ({
  row, rowProps, visibleColumns, data, loading
}) => {
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
};
