import React, { useRef, useState } from "react";
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
} from "./style";
import { Image, Content } from "../style";
import Bell from "../../Bell";
import { logout } from "../../../redux/modules/auth/actions";
import { ClickOutside } from "../../../hooks/click-outside";
const titleClass = classNames("body-large", "weight-medium", "text-black-800");

export default () => {
  const clickRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const title = useSelector(({ navReducer }) => navReducer.title);
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
    <Container className="shadow-primary-4">
      <span className={titleClass}>{title}</span>
      <Content>
        <Bell Component={<div></div>} margin="0 20px" value="" />
        <PopupContainer>
          <UserInfoContainer>
            <span
              className={classNames(
                "weight-regular",
                "button-large",
                "text-black-800"
              )}
            >
              Hi, Bro
            </span>
            {/* eslint-disable-next-line global-require */}
            <Image
              ref={clickRef}
              src={require("../../../assets/images/avatar-2.jpg")}
              onClick={() => setIsOpen((prevState) => !prevState)}
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
