export function formatCurrency(price?: number) {
  if (!price) {
    return '';
  }

  let formatted = price.toFixed(2).toString();

  const pattern = /(\d)(?=(\d{3})+(?!\d))/g;

  formatted = formatted.replace(pattern, '$1,');

  return formatted;
}

