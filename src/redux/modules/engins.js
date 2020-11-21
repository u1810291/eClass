import chartTypes from '../../constants/charts';
import Chart from '../../services/charts';

export function setEngine(payload, getSeries, type) {
  const getSeriesFunc = this[getSeries].bind(this);
  return (dispatch) => {
    dispatch(this[type](payload));
    dispatch(getSeriesFunc());
  };
}

export function getEngine(type, callBack, state, dispatch) {
  switch (type) {
  case chartTypes.FINANCIAL_OVERVIEW: {
    const {
      dashboardReducer: {
        financialOverview: { period }
      }
    } = state;
    Chart.getFinancialOverview({ period }).then((payload) => dispatch(callBack(payload)));
    break;
  }
  case chartTypes.PROFIT_CHART: {
    const {
      dashboardReducer: {
        profitChart: { period }
      }
    } = state;
    Chart.getProfitChart({ period }).then((payload) => dispatch(callBack(payload)));
    break;
  }
  case chartTypes.BRANCH_REPUTATION: {
    const {
      dashboardReducer: {
        branchReputation: { series, ...others }
      }
    } = state;
    Chart.getBranchReputation(others).then((payload) => dispatch(callBack(payload)));
    break;
  }
  case chartTypes.CUSTOMERS: {
    const {
      dashboardReducer: {
        customers: { series, ...others }
      }
    } = state;
    Chart.getCustomers(others).then((payload) => dispatch(callBack(payload)));
    break;
  }
  case chartTypes.SPENDING_BY_CATEGORY: {
    const {
      dashboardReducer: {
        spendingByCategory: { period }
      }
    } = state;
    Chart.getSpendingByCategory({ period }).then((payload) => dispatch(callBack(payload)));
    break;
  }
  case chartTypes.SPENDINGS_PAGE: {
    const {
      spendingsReducer: { period }
    } = state;
    Chart.getSpendingsPageData({ period }).then((payload) => dispatch(callBack(payload)));
    break;
  }
  case chartTypes.ORDER_BY_PAYMENT_TYPE: {
    const {
      dashboardReducer: {
        ordersByPaymentType: { period }
      }
    } = state;
    Chart.getOrdersByPaymentType({ period }).then((payload) => dispatch(callBack(payload)));
    break;
  }
  case chartTypes.CUSTOMER_STATISTICS: {
    const {
      usersStatistics: {
        customerStatistics: { series, ...others }
      }
    } = state;
    Chart.getCustomerStatistics(others).then((payload) => dispatch(callBack(payload)));
    break;
  }
  default:
    break;
  }
}
