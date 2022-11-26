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

export const schemaUpdateUser = yup.object().shape({
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
});

export const schemaRegisterProduct = yup.object().shape({
  name: yup
    .string()
    .required("Preencha o nome")
    .trim()
    .min(3, "Preencha no mínimo com 3 caracteres"),
  brandId: yup.string().required("Escolha ou preencha a marca").nullable(),
  unityId: yup.string().required("Escolha a unidade").nullable(),
  price: yup
    .string()
    .required("Preencha o valor")
    .trim()
    .min(2, "Preencha no mínimo com 2 caracteres"),
  categoryId: yup.string().required("Escolha a categoria").nullable(),
  marketId: yup.string().required("Escolha o mercado").nullable(),
});
