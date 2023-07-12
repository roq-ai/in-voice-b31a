import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  xml_content: yup.string().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
