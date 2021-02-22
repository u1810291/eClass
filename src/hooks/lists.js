import { useDispatch } from 'react-redux';
import { getCities, getCountries, getReasons } from '../redux/modules/lists/actions';

export const getDropdowns = (type) => {
  const dispatch = useDispatch();
  if (type === 'city') {
    return dispatch(getCities());
  }
  if (type === 'country') {
    return dispatch(getCountries());
  }
  if (type === 'reasons') {
    return dispatch(getReasons());
  }
  return null;
};
