/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import UserCell from './UserCell';
import LinkCell from './LinkCell';
import DownloadCell from './DownloadCell';

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
        Cell: ({ cell: { value } }) => <DownloadCell {...value} />
      };
    }
    return rest;
  });
