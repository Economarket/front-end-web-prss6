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
  password: yup
    .string()
    .required("Preencha a senha")
    .trim()
    .min(8, "Sua senha não está de acordo as regras."),
  confirmPassword: yup
    .string()
    .required("Preencha a senha")
    .trim()
    .min(8, "As senhas não correspondem.")
    .oneOf([yup.ref("password")], "As senhas não correspondem."),
});

export const schemaRegisterProduct = yup.object().shape({
  name: yup
    .string()
    .required("Preencha o nome")
    .trim()
    .min(3, "Preencha no mínimo com 3 caracteres"),
  marca: yup
    .string()
    .required("Preencha a marca")
    .trim()
    .min(3, "Preencha no mínimo com 3 caracteres"),
  unidade: yup.string().required("Preencha a unidade").trim(),
  valor: yup.string().required("Preencha o valor").trim(),
  categoria: yup.string().required("Escolha a categoria").trim(),
  mercado: yup.string().required("Escolha o mercado").trim(),
});
