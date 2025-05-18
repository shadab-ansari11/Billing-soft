/**
 * @format
 */

import ErrorMessages from "constants/errorMessages";
import { FormikHelpers, useFormik } from "formik";
import { ILoginRequest } from "../../../../interfaces/auth";
import * as Yup from "yup";

const defaultValues: ILoginRequest = {
  email: "",
  password: "",
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./)
    .required(ErrorMessages.login.email),
  password: Yup.string().required(ErrorMessages.login.password),
});

const useForm = (
  onSubmit: (
    values: ILoginRequest,
    formikHelpers: FormikHelpers<ILoginRequest>,
  ) => void | Promise<unknown>,
  initialValues: ILoginRequest = defaultValues,
) => {
  return useFormik<ILoginRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useForm;
