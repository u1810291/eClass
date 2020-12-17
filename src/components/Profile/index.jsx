import { UserDetails, Container, Form, InputsContainer } from "./style";
import Card from "../Card";
import { NormalInput } from "../Forms/Inputs";
export default () => {
  return (
    <Container>
      <UserDetails></UserDetails>

      <Form>
        <Card>
          Student
          <InputsContainer>
            <NormalInput size="medium" white />
            <NormalInput size="medium" white />
            <NormalInput size="medium" white />
            <NormalInput size="medium" white />
            <NormalInput size="medium" white />
            <NormalInput size="medium" white />
            <NormalInput size="medium" white />
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
