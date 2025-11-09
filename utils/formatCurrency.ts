import config from "@/constants/config";

export const formatCurrencyInput = (value: number) => {
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    minimumFractionDigits: config.minimumFractionDigits,
  }).format(value);
};
