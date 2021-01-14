import {UserDetails, Container, Content, Area, Text} from "./style";
import Form from "./Form";
import Info from "./Info";
import {TextArea} from "../Forms/Inputs/TextArea/style";
export default () => {
  return (
    <Container>
      <UserDetails>
        <Info />
      </UserDetails>
      <Content>
        <Form title="Student" />
        <Form title="Parent" />
      </Content>
      <Area>
        <Text>Дополнительная информация</Text>
        <TextArea white />
      </Area>
    </Container>
  );
};
