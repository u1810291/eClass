import Users from "../../../components/Users";
import Table from "../../../components/TableV2";
import { Container } from "./style";
export default () => {
  return (
    <Container>
      <Users>
        <Table
          headers={headers}
          data={data}
          toolTips={toolTips}
          headerToolTips={headerToolTips}
          fetchData={fetchData}
          total={total}
          loading={loading}
        />
      </Users>
      ;
    </Container>
  );
};
