import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Sparkline from './sparkline';
import type { Coin } from '@/types';

function Row({ coin }: { coin: Coin }) {
  const currentPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD'
  }).format(coin.current_price);

  const currentMarketcap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    compactDisplay: 'short'
  }).format(coin.market_cap);

  return (
    <Link href={`/${coin.id}`} legacyBehavior>
      <tr className='w-full px-4 bg-gray-900 group h-14 hover:cursor-pointer hover:bg-gray-800'>
        <td className='px-4 py-2 whitespace-nowrap group-hover:rounded-l-xl'>
          <div className='relative w-8 h-8 overflow-hidden bg-white rounded-full'>
            <Image src={coin.image} alt={coin.name} height={32} width={32} />
          </div>
        </td>

        <td className='px-4 py-2 whitespace-nowrap'>
          <p className='text-base font-bold'>{coin.name}</p>
        </td>

        <td className='px-4 py-2 whitespace-nowrap'>
          <p className='text-sm font-semibold'>{currentPrice}</p>
        </td>

        <td className='px-4 py-2 whitespace-nowrap'>
          <div
            className={cn(
              'text-sm font-semibold',
              coin.price_change_percentage_24h < 0 && 'text-red-300',
              coin.price_change_percentage_24h >= 0 && 'text-green-300'
            )}
          >
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        </td>

        <td className='px-4 py-2 whitespace-nowrap'>
          <p className='text-sm font-semibold'>{currentMarketcap}</p>
        </td>

        <td className='w-[120px] whitespace-nowrap px-4 py-2 group-hover:rounded-r-xl'>
          <Sparkline
            data={coin.sparkline_in_7d.price}
            percentChange={coin.price_change_percentage_7d_in_currency}
          />
        </td>
      </tr>
    </Link>
  );
}

export default Row;
