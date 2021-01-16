import types from '../../../constants/action-types';

export const genericTypes = [
  {
    key: types.ORDERS,
    headerName: 'ordersHeader',
  },
  {
    key: types.SINGLE_BRANCH_ORDERS,
    headerName: 'branchOrdersHeader',
  },
  {
    key: types.PICKUPS,
    headerName: 'pickupsHeader',
  },
  {
    key: types.DELIVERIES,
    headerName: 'deliveriesHeader',
  },
  {
    key: types.SHIPMENTS,
    headerName: 'shipmentsHeader',
  },
  {
    key: types.FEDEX,
    headerName: 'fedexHeader',
  },
  {
    key: types.WAREHOUSE,
    headerName: 'warehouseHeader',
  },
  {
    key: types.SPENDINGS,
    headerName: 'spendingsHeader',
  },
  {
    key: types.SHIPMENT_SINGLE_VIEW,
    headerName: 'singleShipmentHeader',
  },
  {
    key: types.UPC_ORDERS,
    headerName: 'UPCOrdersHeader',
  },
  {
    key: types.UPC_FEDEX,
    headerName: 'UPCFedexHeader',
  },
  {
    key: types.UPC_ONLINE_ORDERS,
    headerName: 'UPCOnlineOrdersHeader',
  },
];

export const usersHeader = [
  {
    id: 1,
    Header: 'ID',
    accessor: 'id',
    show: true,
  },
  {
    id: 2,
    Header: 'Full name',
    accessor: 'fullname',
    type: 'user',
    show: true,
  },
  {
    id: 3,
    Header: 'Email',
    accessor: 'email',
    type: 'email',
    show: true,
  },
  {
    id: 4,
    Header: 'Date of birth',
    accessor: 'dateOfBirth',
    align: 'end',
    suffix: 'pcs',
    show: true,
  },
  {
    id: 5,
    Header: 'Phones',
    accessor: 'phones',
    align: 'end',
    prefix: '+',
    show: true,
  },
  {
    id: 6,
    Header: 'Address',
    accessor: 'address',
    align: 'end',
    show: true,
  },
];
