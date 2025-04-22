/**
 * @format
 */

import ErrorMessages from "constants/errorMessages";
import { FormikHelpers, useFormik } from "formik";
import { IOrganization } from "../../../../interfaces/auth";
import * as Yup from "yup";

const defaultValues: IOrganization = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const schema = Yup.object().shape({
    firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required(ErrorMessages.signUp.firstName),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required(ErrorMessages.signUp.lastName),
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./)
    .required(ErrorMessages.login.email),
  password: Yup.string().required(ErrorMessages.login.password),
});

const useForm = (
  onSubmit: (
    values: IOrganization,
    formikHelpers: FormikHelpers<IOrganization>
  ) => void | Promise<unknown>,
  initialValues: IOrganization = defaultValues
) => {
  return useFormik<IOrganization>({
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
