import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Preencha o e-mail")
    .trim()
    .min(3, "Preencha no mínimo com 3 caracteres")
    .email("Preencha com um e-mail válido"),
  password: yup.string().required("Preencha a senha").trim(),
});

export const schemaRegisterUser = yup.object().shape({
  name: yup
    .string()
    .required("Preencha o nome")
    .trim()
    .min(3, "Preencha no mínimo com 3 caracteres"),
  email: yup
    .string()
    .required("Preencha o e-mail")
    .trim()
    .min(3, "Preencha no mínimo com 3 caracteres")
    .email("Preencha com um e-mail válido"),
  password: yup.string().required("Preencha a senha").trim(),
  confirmPassword: yup.string().required("Preencha a senha").trim(),
});
