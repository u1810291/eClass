import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PageButtons,
  ChangeButtons,
  Button,
  ChangeButton
} from './style';
import Dropdown from '../../Forms/DropdownV3';
import Icon from '../../Icon';
import { useButtons } from './useButtons';

const options = [
  { value: 10, label: '10 item view' },
  { value: 25, label: '25 item view' },
  { value: 50, label: '50 item view' },
  { value: 100, label: '100 item view' }
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
  pageIndex
}) => {
  const buttons = useButtons({ pageCount, pageIndex });

  const handlePageChange = (title) => {
    if (title !== '...') gotoPage(Number(title));
  };

  return (
    <Container>
      <Dropdown
        white
        placeholder="Select"
        options={options}
        value={pageSize}
        onChange={setPageSize}
        size="large"
      />
      <PageButtons repeat={pageCount > 7 ? 7 : pageCount}>
        {buttons.map((title, index) => (
          <Button
            key={`${index + 1}`}
            onClick={() => handlePageChange(title)}
            // eslint-disable-next-line eqeqeq
            active={pageIndex == title}
          >
            {title !== '...' ? title + 1 : title}
          </Button>
        ))}
      </PageButtons>
      <ChangeButtons>
        <ChangeButton
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          <Icon
            icon="arrow-left2"
            color={!canPreviousPage ? '#C4C4C4' : '#262626'}
            size="16px"
          />
        </ChangeButton>
        <ChangeButton
          disabled={!canNextPage}
          onClick={nextPage}
        >
          <Icon
            icon="arrow-right2"
            color={!canNextPage ? '#C4C4C4' : '#262626'}
            size="16px"
          />
        </ChangeButton>
      </ChangeButtons>
    </Container>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number
};
Pagination.defaultProps = {
  pageCount: 40
};

export default Pagination;
