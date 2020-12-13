export function setEngine(payload, getSeries, type) {
  const getSeriesFunc = this[getSeries].bind(this);
  return (dispatch) => {
    dispatch(this[type](payload));
    dispatch(getSeriesFunc());
  };
}
