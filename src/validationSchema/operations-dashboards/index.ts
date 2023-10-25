import * as yup from 'yup';

export const operationsDashboardValidationSchema = yup.object().shape({
  dashboard_name: yup.string().required(),
  dashboard_description: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
