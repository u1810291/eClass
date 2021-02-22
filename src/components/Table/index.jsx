/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useCallback, useMemo
} from 'react';

import Table from './CustomTable';
import SubRowAsync from './SubRowAsync';
import { Container } from './style';

export default ({
  data: tableData, header, loading, subData, total, setSort, toolTips, onChange, height
}) => {
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
    <Container height={height}>
      <Table
        height={height}
        loading={loading}
        toolTips={toolTips}
        setSort={setSort}
        total={total}
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
        onChange={onChange}
      />

    </Container>
  );
};
