/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import UserCell from './UserCell';
import JoinCell from './JoinCell';
import StartCell from './StartCell';
import DownloadCell from './DownloadCell';
import UploadCell from './UploadCell';

export const headerMaker = (data) => data
  .filter(({ show }) => show)
  .map(({ type, ...rest }) => {
    if (type === 'user') {
      return {
        ...rest,
        Cell: ({ cell: { value } }) => <UserCell {...value} />
      };
    }
    if (type === 'join') {
      return {
        ...rest,
        Cell: ({ cell }) => <JoinCell data={cell.row.original} />
      };
    }
    if (type === 'start') {
      return {
        ...rest,
<<<<<<< HEAD
        Cell: (cell) => <StartCell rest={cell.row.original} />
=======
        Cell: ({ cell }) => <StartCell data={cell.row.original} />
>>>>>>> aab3859407d5b16c61d7bccd22e7e8faed6ccdf8
      };
    }
    if (type === 'download') {
      return {
        ...rest,
        Cell: ({ cell: { value } }) => <DownloadCell {...value} />
      };
    }
    if (type === 'upload') {
      return {
        ...rest,
        Cell: ({ cell: { value } }) => <UploadCell {...value} />
      };
    }
    return rest;
  });
