import CoinTable from '@/components/CoinTable';

async function getCoinData() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&sparkline=true&per_page=100&page=1&price_change_percentage=24h%2C7d',
    {
      next: { revalidate: 60 }
    }
  );

  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

async function HomePage() {
  const coins: Coin[] = await getCoinData();

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-separate border-spacing-y-3'>
        <thead>
          <tr>
            <th className='whitespace-nowrap px-4 py-2 text-left'></th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>Name</th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>Price</th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>% Change</th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>
              Market Cap
            </th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>
              Last 7 Days
            </th>
          </tr>
        </thead>
        <CoinTable coins={coins} />
      </table>
    </div>
  );
}

export default HomePage;
