import {
  Container,
  Title,
  Description,
  ImageWrapper,
  UserInfo,
  Text,
} from "./style";
import classNames from "classnames";

export default () => {
  return (
    <Container>
      <Title className={classNames("weight-semibold", "heading-6")}>
        Личный кабинет
      </Title>
      <Description className={classNames("body-large", "weight-light")}>
        This information can be edited from your profile page.
      </Description>
      <UserInfo>
        <ImageWrapper>Image</ImageWrapper>
        <Text>
          <Text.Name>Isaac Williams</Text.Name>
          <Text.Email>kinanthayani@mail.com</Text.Email>
        </Text>
      </UserInfo>
    </Container>
  );
};
