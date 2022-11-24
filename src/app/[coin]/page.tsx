import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    coin: string;
  };
}

async function getCoinData(coin: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data as CoinData;
}

async function CoinPage({ params }: Props) {
  const coin = await getCoinData(params.coin);

  if (!coin) {
    return notFound();
  }

  const currentPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD'
  }).format(coin.market_data.current_price.aud);

  const currentMarketcap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    compactDisplay: 'short'
  }).format(coin.market_data.market_cap.aud);

  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex items-center space-x-4'>
        <div className='relative h-20 w-20 overflow-hidden rounded-full'>
          <Image src={coin.image.large} alt={params.coin} fill />
        </div>

        <div className='space-y-1'>
          <h2 className='text-3xl font-bold'>{coin.name}</h2>
          <div className='space-x-5 font-semibold'>
            <span className='text-cyan-200'>{currentPrice}</span>
            <span
              className={clsx(
                coin.market_data.price_change_percentage_24h < 0
                  ? 'text-red-300'
                  : 'text-green-300'
              )}
            >
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <Link
          href={coin.links.homepage[0]}
          target='_blank'
          className='rounded-lg bg-primary-accent px-8 py-3 text-sm font-bold text-white hover:bg-primary-accent/80'
          rel='noreferrer'
        >
          Website
        </Link>
        <Link
          href={`http://twitter.com/${coin.links.twitter_screen_name}`}
          target='_blank'
          className='rounded-lg bg-primary-accent px-8 py-3 text-sm font-bold text-white hover:bg-primary-accent/80'
          rel='noreferrer'
        >
          Twitter
        </Link>
      </div>
      <div className='space-y-2 py-5'>
        <h2 className='text-lg font-bold'>About {coin.name}</h2>
        <p className='line-clamp-5'>{coin.description.en}</p>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='flex flex-col divide-y divide-pink-500 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700'>
          <div className='p-5 text-sm font-bold uppercase'>
            <span>Market cap</span>
          </div>
          <div className='truncate px-5 py-7 font-semibold'>
            {currentMarketcap}
          </div>
        </div>
        <div className='flex flex-col divide-y divide-cyan-500 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700'>
          <div className='p-5 text-sm font-bold uppercase'>
            <span>24h Volume</span>
          </div>
          <div className='truncate px-5 py-7 font-semibold'>
            {currentMarketcap}
          </div>
        </div>
        <div className='flex flex-col divide-y divide-teal-500 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700'>
          <div className='p-5 text-sm font-bold uppercase'>
            <span>Circulating Supply</span>
          </div>
          <div className='truncate px-5 py-7 font-semibold'>
            {currentMarketcap}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinPage;
