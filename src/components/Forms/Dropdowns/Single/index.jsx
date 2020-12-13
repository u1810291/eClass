import { useState, useEffect } from "react";

import {
  Container,
  Selection,
  IconWrapper,
  Item,
  Menu,
  Text,
  SubItem,
} from "./style";

import { ReactComponent as ArrowDown } from "../../../../assets/icons/arrowClose.svg";
import { ReactComponent as ArrowUp } from "../../../../assets/icons/arrowUp.svg";

const Single = ({
  onClick,
  onChange,
  options,
  placeholder,
  marginRight,
  onSelect,
  key,
  size,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [width, setWidth] = useState(0);
  const [windowH] = useState(window.innerHeight);
  const [windowW] = useState(window.innerWidth);
  const [item, setItem] = useState(placeholder || options[0].value);
  const onClicking = (event) => {
    setItem(event.target.value);
    if (onSelect) {
      onSelect(event.target.value);
    } else {
      console.log(event.target.value);
    }
    if (onClick) {
      onClick(event.target.value);
    } else {
      console.log(event.target.value);
    }
  };
  const onHandleResize = (event) => {
    setWidth(event);
  };
  useEffect(() => {
    const viewHeight = document
      .getElementById(`dropdown-container-${key}`)
      .getBoundingClientRect();
    const viewWidth = document.getElementById(`selection-container-${key}`)
      .clientWidth;
    const menuHeight = document.getElementById(`menu-container-${key}`)
      .clientHeight;

    window.addEventListener("resize", onHandleResize(viewWidth));
    if (viewHeight.bottom + menuHeight > window.innerHeight) {
      setEnd(true);
    } else {
      setEnd(false);
    }
    return () => {
      window.removeEventListener("resize", onHandleResize);
    };
  }, [end, windowW, windowH, item, open, width, key]);

  return (
    <Container
      id={`dropdown-container-${key}`}
      end={end ? 1 : 0}
      onMouseLeave={() => setOpen(false)}
    >
      <Selection
        size={size}
        onClick={() => setOpen(!open)}
        {...args}
        id={`selection-container-${key}`}
      >
        <Text {...args}>{item}</Text>
        <IconWrapper>{open ? <ArrowUp /> : <ArrowDown />}</IconWrapper>
      </Selection>
      <Menu
        id={`menu-container-${key}`}
        style={{ display: open ? "flex" : "none" }}
        disable
        width={width}
        end={end ? 1 : 0}
      >
        {options.map((itm) =>
          Array.isArray(itm.value) ? (
            <div key={itm.id}>
              <Item
                readOnly
                disabled
                key={itm.id}
                value={itm.name}
                width={width}
              />
              {itm.value.map((sub) => (
                <SubItem
                  id={sub.id}
                  readOnly
                  key={sub.id}
                  onClick={(e) => onClicking(e)}
                  value={sub.value}
                  name={sub.name}
                  active={item === sub.value}
                  width={width}
                />
              ))}
            </div>
          ) : (
            <Item
              id={itm.id}
              key={itm.id}
              readOnly
              onClick={(e) => onClicking(e)}
              value={itm.value}
              name={itm.name}
              active={item === itm.value}
            />
          )
        )}
      </Menu>
    </Container>
  );
};

export default Single;
