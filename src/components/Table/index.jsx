/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useCallback, useMemo
} from 'react';

import Spinner from '../Spinner';
import Table from './CustomTable';
import SubRowAsync from './SubRowAsync';
import { Container } from './style';

export default({
  data: tableData, header, loading, subData, total, setSort
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
