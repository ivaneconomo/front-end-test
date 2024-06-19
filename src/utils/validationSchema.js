import * as Yup from 'yup';
import {
  ageFieldValidation,
  checkPasswordFieldValidation,
  emailFieldValidation,
  nameFieldValidation,
  passwordFieldValidation,
} from './commonFieldValidations';

export const userDataSchema = Yup.object()
  .shape({
    firstName: nameFieldValidation,
    lastName: nameFieldValidation,
    email: emailFieldValidation,
    age: ageFieldValidation,
    password: passwordFieldValidation,
    checkPassword: checkPasswordFieldValidation,
  })
  .required();

export const loginDataSchema = Yup.object().shape({
  email: emailFieldValidation,
  password: passwordFieldValidation,
});
