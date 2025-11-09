import config from "@/constants/config";

// Helper function to find the separators used by your locale
export const getSeparators = () => {
  // Format a standard number (like 1111.11) to see what characters the locale uses
  const formatted = new Intl.NumberFormat(config.locale).format(1111.11);

  // Example: '1,111.11' (US)
  // Example: '1.111,11' (DE)

  // Decimal separator is the character before the last two digits
  const decimalSeparator = formatted.charAt(formatted.length - 3);

  // Thousands separator is the character between the 1s
  const thousandsSeparator = formatted.charAt(1);

  return { thousandsSeparator, decimalSeparator };
};
