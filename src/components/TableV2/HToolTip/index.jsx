import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Container} from "./style";
import {Button, OptionButton} from "../ToolTip/style";
import Icon from "../../Icon";
import {ClickOutside} from "../../../hooks/click-outside";

import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useShowModal} from "../../../hooks/modal";

const caption = classNames("button-medium", "weight-medium", "text-black-800", "ml-2");
const HeaderToolTip = ({open, data}) => {
  const refClick = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((globalState) => globalState);
  const modal = useShowModal();
  return (
    <>
      <Button
        ref={refClick}
        onClick={() => {
          alert("Hello world");
        }}
      >
        <Icon icon="menu-dot" />
      </Button>
      <ClickOutside
        outClickRef={refClick}
        outsideClicked={() => {
          alert("Hello world");
        }}
      >
        <Container open={open}>
          {data.map(({name, icon, onClick: ItemClick}, index) => (
            <OptionButton
              onClick={() =>
                ItemClick({
                  history,
                  dispatch,
                  state,
                  ...modal,
                })
              }
              key={`${index + 1}`}
            >
              <Icon icon={icon} size="16px" color="#7e8299" />
              <span className={caption}>{name}</span>
            </OptionButton>
          ))}
        </Container>
      </ClickOutside>
    </>
  );
};

HeaderToolTip.propTypes = {
  open: PropTypes.bool,
};

HeaderToolTip.defaultProps = {
  open: false,
};

export default HeaderToolTip;
