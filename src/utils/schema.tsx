import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Preencha o e-mail")
    .trim()
    .min(3, "Preencha no mínimo com 3 caracteres")
    .email("Preencha com um e-mail válido"),
  password: yup
    .string()
    .required('Preencha a senha')
    .trim(),
});
