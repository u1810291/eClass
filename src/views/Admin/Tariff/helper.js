/* eslint-disable no-alert */
import React from 'react';
import Delete from './Delete';
import Update from './Update';

export const toolTips = [
  {
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Delete Tariff',
        body: () => <Delete id={id} />
      });
    }
  },
  {
    name: 'Delete Tariff Name',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Delete Tariff name',
        body: () => <Delete id={id} />
      });
    }
  },
  {
    name: 'Update',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Update Tariff',
        body: () => <Update id={id} />
      });
    }
  }
];
