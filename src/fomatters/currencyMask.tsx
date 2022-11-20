export const currencyMask = (value: string) =>
  value
    ? value
        .replace(/\D/g, "")
        .replace(/(\d)(\d{2})$/, "$1,$2")
        .replace(/(?=(\d{3})+(\D))\B/g, ".")
    : "";

export const removeCurrencyMask = (value: string) =>
  value.replace(".", "").replace(",", ".");
