import cn from 'clsx';
import valueFormatter from '@/utils/formatter';
import Image from 'next/image';
import Link from 'next/link';
import { CoinSingle } from '@/types';

interface Props {
  coin: CoinSingle;
}

function CoinInfo({ coin }: Props) {
  const currentPrice = valueFormatter(coin.market_data.current_price.aud);

  return (
    <div className='flex flex-col space-y-8'>
      <div className='flex items-center space-x-4'>
        <div className='relative h-20 w-20 overflow-hidden rounded-full'>
          <Image
            src={coin.image.large}
            alt={coin.name}
            height={80}
            width={80}
          />
        </div>

        <div className='space-y-1'>
          <h2 className='text-3xl font-bold'>{coin.name}</h2>
          <div className='space-x-5 font-semibold'>
            <span className='text-cyan-200'>{currentPrice}</span>
            <span
              className={cn(
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
          className='rounded bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-accent/80'
          rel='noreferrer'
        >
          Website
        </Link>
        <Link
          href={`http://twitter.com/${coin.links.twitter_screen_name}`}
          target='_blank'
          className='rounded bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-accent/80'
          rel='noreferrer'
        >
          Twitter
        </Link>
      </div>
      <div className='space-y-2 py-5'>
        <h2 className='text-lg font-bold'>About {coin.name}</h2>
        <p className='line-clamp-5'>{coin.description.en}</p>
      </div>
    </div>
  );
}

export default CoinInfo;
