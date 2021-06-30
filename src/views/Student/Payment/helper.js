import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { topUp } from '../../../redux/modules/student/payments/actions';

export function payment(id) {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    tariff_id: Yup.string().required('Tariff is required field'),
    method_id: Yup.string().required('Method is required'),
    amount: Yup.number().required('Amount is required'),
    phone: Yup.number()
      .min(998301111111, 'Number should be 12 digits example 99 890 888 55 44')
      .max(998999999999, 'Number should be 12 digits example 99 890 888 55 44')
      .required('Phone is required')
  });
  const formik = useFormik({
    initialValues: {
      id,
      tariff_id: '',
      method_id: '',
      amount: undefined,
      phone: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(topUp(values, (res) => {
        console.log(res);
      }));
    }
  });
  return { formik };
}
