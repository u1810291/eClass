import {useState, useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import Table from "../../../components/Table";
import {Container} from "./style";
import {headerToolTips, toolTips} from "./helper";
import {headerMaker, getData} from "../../../components/TableV2/helpers";
import {useAsync} from "../../../hooks/mounted";
import Service from "../../../services/user";
// import axios from "axios";
import Header from "../../../components/Headers/UsersHeader";
export default () => {
  const asyncTask = useAsync();

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const headerData = useSelector(({tableReducer}) => tableReducer.usersHeader);
  const data = items;
  const headers = useMemo(() => headerMaker(headerData), [headerData]);
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(
    (params) =>
      getData({
        ...params,
        setLoading,
        setItems,
        setTotal,
        asyncTask,
        Service,
      }),
    [asyncTask]
  );
  console.log(items);

  return (
    <Container>
      <Table />
    </Container>
  );
};
