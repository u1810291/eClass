import * as table from '../../../constants/tables';

export const lessonsHeader = [
  {
    id: 1,
    Header: 'ID',
    accessor: 'id',
    show: true
  },
  {
    id: 2,
    Header: 'Customer',
    accessor: 'customer_id',
    type: 'user',
    show: true
  },
  {
    id: 3,
    Header: 'Creator',
    accessor: 'staff_id',
    type: 'user',
    show: true
  },
  {
    id: 4,
    Header: 'Partners',
    accessor: 'partners',
    disableSortBy: true,
    type: 'user',
    show: true
  },
  {
    id: 5,
    Header: 'Boxes',
    accessor: 'boxes',
    disableSortBy: true,
    align: 'end',
    suffix: 'pcs',
    show: true
  },
  {
    id: 6,
    Header: 'Delivered Boxes',
    accessor: 'total_delivered_boxes',
    disableSortBy: true,
    align: 'end',
    show: true
  },
  {
    id: 7,
    Header: 'Payed price',
    accessor: 'payed_price',
    align: 'end',
    prefix: '$',
    show: true
  },
  {
    id: 8,
    Header: 'Total weight',
    accessor: 'total_weight_boxes',
    disableSortBy: true,
    align: 'end',
    suffix: 'lb',
    show: true
  },
  {
    id: 9,
    Header: 'Created at',
    accessor: 'created_at',
    show: true
  },

  {
    id: 10,
    Header: 'Status',
    accessor: 'status',
    type: 'status',
    show: true
  },
  {
    id: 11,
    Header: 'Pay status',
    accessor: 'payment_status',
    type: 'status',
    show: true
  }
];
