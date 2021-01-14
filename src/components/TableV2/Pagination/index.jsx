import React, {useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import {Container, PageButtons, ChangeButtons, Button, ChangeButton} from "./style";
import Dropdown from "../../Forms/DropdownV3";
import {buttons as allButtons} from "./helper";
import Icon from "../../Icon";

const optionData = [
  {value: 10, label: "10 item view"},
  {value: 25, label: "25 item view"},
  {value: 50, label: "50 item view"},
  {value: 100, label: "100 item view"},
];

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  pageSize,
  setPageSize,
  pageIndex,
}) => {
  const [aIndex, setAIndex] = useState(0);

  const buttons = useMemo(() => allButtons(pageIndex + 1, pageCount), [pageIndex, pageCount]);

  useEffect(() => {
    if (pageCount - (pageIndex + 1) > 2 && pageIndex >= 3) {
      setAIndex(3);
    }
  }, [pageIndex, pageCount]);

  return (
    <Container>
      <Dropdown
        white
        placeholder="Select"
        options={optionData}
        value={pageSize}
        onChange={setPageSize}
        size="large"
      />
      <PageButtons repeat={pageCount > 7 ? 7 : pageCount}>
        {buttons.map((title, index) => (
          <Button
            key={`${index + 1}`}
            onClick={() => {
              if (title !== "...") {
                setAIndex(index);
                gotoPage(title - 1);
              }
            }}
            active={aIndex === index}
          >
            {aIndex === index ? pageIndex + 1 : title}
          </Button>
        ))}
      </PageButtons>
      <ChangeButtons>
        <ChangeButton
          disabled={!canPreviousPage}
          onClick={() => {
            previousPage();
            if (canPreviousPage) {
              setAIndex(aIndex - 1);
            }
          }}
        >
          <Icon icon="left" color={!canPreviousPage ? "#C4C4C4" : "#262626"} size="16px" />
        </ChangeButton>
        <ChangeButton
          disabled={!canNextPage}
          onClick={() => {
            nextPage();
            if (canNextPage) {
              setAIndex(aIndex + 1);
            }
          }}
        >
          <Icon icon="right" color={!canNextPage ? "#C4C4C4" : "#262626"} size="16px" />
        </ChangeButton>
      </ChangeButtons>
    </Container>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
};
Pagination.defaultProps = {
  pageCount: 40,
};

export default Pagination;
