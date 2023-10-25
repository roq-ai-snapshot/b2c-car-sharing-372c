import * as yup from 'yup';

export const operationsStaffValidationSchema = yup.object().shape({
  staff_name: yup.string().required(),
  staff_role: yup.string().required(),
  dashboard_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
