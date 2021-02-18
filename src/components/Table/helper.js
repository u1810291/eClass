import React from 'react';
import UserCell from './UserCell';
import LinkCell from './LinkCell';

export const headerMaker = (data) => data
  .filter(({ show }) => show)
  .map(({ type, ...rest }) => {
    if (type === 'user') {
      // eslint-disable-next-line react/react-in-jsx-scope
      return {
        ...rest,
        Cell: ({ cell: { value } }) => <UserCell {...value} />
      };
    }
    if (type === 'link') {
      // eslint-disable-next-line react/react-in-jsx-scope
      return {
        ...rest,
        Cell: ({ cell: { value } }) => <LinkCell {...value} />
      };
    }
    if (type === 'download') {
      // eslint-disable-next-line react/react-in-jsx-scope
      return {
        ...rest,
        Cell: ({ cell: { value } }) => <StatusCell {...value} />
      };
    }
    return rest;
  });
