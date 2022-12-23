export default function valueFormatter(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    compactDisplay: 'short'
  }).format(value);
}
