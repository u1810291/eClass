import { Container, Form, InputsContainer } from "./style";
import Card from "../Card";
import { NormalInput } from "../Forms/Inputs";
export default () => {
  return (
    <Container>
      Profile
      <Form>
        <Card>
          <InputsContainer>
            <NormalInput className="head" size="medium" white />
            <NormalInput className="head" size="medium" white />
            <NormalInput className="sidebar" size="medium" white />
            <NormalInput className="content" size="medium" white />
            <NormalInput className="footer" size="medium" white />
            <NormalInput className="footer" size="medium" white />
          </InputsContainer>
        </Card>
        <Card>
          <NormalInput size="medium" white />
          <NormalInput size="medium" white />
          <NormalInput size="medium" white />
          <NormalInput size="medium" white />
        </Card>
      </Form>
    </Container>
  );
};
