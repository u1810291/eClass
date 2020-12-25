import { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import Table from "../../../components/TableV2";
import { Container } from "./style";
import { headerToolTips, toolTips, dataMaker } from "./helper";
import { useAsync } from "../../../hooks/mounted";
import Service from "../../../services/user";
import { getDefaultLocale } from "javascript-time-ago";

export default () => {
  const asyncTask = useAsync();

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const headerData = useSelector(({ tableReducer }) => tableReducer.usersData);
  const data = useMemo(() => dataMaker(items), [items]);
  const headers = useMemo(() => headerMaker(headerData), [headerData]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    (params) =>
      getDefaultLocale({
        ...params,
        setLoading,
        setItems,
        setTotal,
        asyncTask,
        Service,
      }),
    [asyncTask]
  );

  return (
    <Container>
      Hello
      <Table
        headers={headers}
        data={data}
        toolTips={toolTips}
        headerToolTips={headerToolTips}
        fetchData={fetchData}
        total={total}
        loading={loading}
      />
    </Container>
  );
};
