import { useRef, useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  UserInfoContainer,
  PopupContainer,
  DropdownContainer,
  Item,
  Text,
  UserData,
  Header,
  ButtonContainer,
} from "./style";
import { Image, Content } from "../style";
import Bell from "../../Bell";
import { logout } from "../../../redux/modules/auth/actions";
import { ClickOutside } from "../../../hooks/click-outside";
import Icon from "../../Icon";
import { ReactComponent as Avatar } from "../../../assets/images/avatar-2.jpg";
import Dropdown from "../../Forms/Dropdowns";
import { language } from "./options";
import SearchableInput from "../../Forms/Inputs/Search";
import PrimaryButton from "../../Buttons/Primary";

const titleClass = classNames("body-large", "weight-medium", "text-black-800");

export default () => {
  const clickRef = useRef(null);

  const [commonDropdown, setCommonDropdown] = useState(undefined);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = (type) => {
    switch (type) {
      case "profile":
        setIsOpen(false);
        history.push("/users/all-users/1/users-basic-info");
        break;
      case "logout":
        setIsOpen(false);
        dispatch(logout());
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <Header>
        <SearchableInput placeholder="Search here..." size="small" />
      </Header>
      <Content>
        <ButtonContainer>
          <PrimaryButton
            block="block"
            title="Technical support"
            size="small"
            color="#E8523F"
            icon="support"
          />
        </ButtonContainer>
        <ButtonContainer>
          <PrimaryButton
            block="block"
            title="Chat"
            size="small"
            color="#333366"
            icon="chat"
          />
        </ButtonContainer>
        <Bell
          Component={<Icon icon="notification2" />}
          margin="0 30px"
          value="1"
        />
        <PopupContainer>
          <UserInfoContainer>
            <Image
              ref={clickRef}
              src={require("../../../assets/images/avatar-2.jpg")}
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
            <UserData
              className={classNames(
                "weight-regular",
                "button-large",
                "text-black-800"
              )}
            >
              Isaac Williams
            </UserData>

            {/* eslint-disable-next-line global-require */}

            <Dropdown
              placeholder="RU"
              options={language}
              value={commonDropdown}
              onChange={setCommonDropdown}
              size="medium"
            />
          </UserInfoContainer>
          <ClickOutside
            outClickRef={clickRef}
            outsideClicked={() => {
              setIsOpen(false);
            }}
          >
            <DropdownContainer isOpen={isOpen}>
              <Item onClick={() => handleOnClick("profile")}>
                <Text
                  className={classNames(
                    "caption",
                    "weight-semibold",
                    "text-black-800"
                  )}
                >
                  Profile
                </Text>
              </Item>
              <Item onClick={() => handleOnClick("logout")}>
                <Text
                  className={classNames(
                    "caption",
                    "weight-semibold",
                    "text-black-800"
                  )}
                >
                  Log out
                </Text>
              </Item>
            </DropdownContainer>
          </ClickOutside>
        </PopupContainer>
      </Content>
    </Container>
  );
};
