export const phoneMask = (value: string) =>
  value
    ? value
        .replace(/[^\d]+/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
        .replace(/(-\d{4})\d+?$/, "$1")
    : "";

export const removePhoneMask = (value: string) => value.replace(/[^\d]+/g, "");
