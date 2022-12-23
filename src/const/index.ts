export const API_URL = 'https://api.coingecko.com/api/v3/coins';

export const searchParams = new URLSearchParams({
  vs_currency: 'aud',
  order: 'market_cap_desc',
  sparkline: 'true',
  per_page: '50',
  page: '1',
  price_change_percentage: '24h%2C7d'
});

export const HOME_ENDPOINT = API_URL.concat('/markets?' + searchParams);
