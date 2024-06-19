import * as Yup from 'yup';

export const nameFieldValidation = Yup.string()
  .trim()
  .matches(
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
    'El campo solo puede contener letras y espacios.'
  )
  .min(2, 'Ingrese al menos 2 caracteres.')
  .max(32, 'Ingrese como máximo 32 caracteres.')
  .required('El campo es requerido.');

export const emailFieldValidation = Yup.string()
  .trim()
  .email('Formato email no válido.')
  .required('El campo es requerido.');

export const ageFieldValidation = Yup.number()
  .min(1, 'Edad mínima 1 año.')
  .max(100, 'Edad máxima 100 años.')
  .required('El campo es requerido.');

export const passwordFieldValidation = Yup.string()
  .min(8, 'Contraseña debe tener al menos 8 caracteres.')
  .max(128, 'Contraseña no puede tener más de 128 caracteres.')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/,
    'La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*?&).'
  )
  .required('Contraseña es requerida.');

export const checkPasswordFieldValidation = Yup.string()
  .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir.')
  .required('Repetir contraseña es requerido.');
