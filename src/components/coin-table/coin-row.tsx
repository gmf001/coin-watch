import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Sparkline from './coin-sparkline';

interface Props {
  coin: Coin;
}

function CoinRow({ coin }: Props) {
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
      <tr className='group h-14 w-full bg-dark-accent px-4 hover:cursor-pointer hover:bg-dark-accent-1'>
        <td className='whitespace-nowrap px-4 py-2 group-hover:rounded-l-xl'>
          <div className='relative h-8 w-8 overflow-hidden rounded-full bg-white'>
            <Image
              src={coin.image}
              alt={coin.name}
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
        </td>

        <td className='whitespace-nowrap px-4 py-2'>
          <p className='text-base font-bold'>{coin.name}</p>
        </td>

        <td className='whitespace-nowrap px-4 py-2'>
          <p className='text-sm font-semibold'>{currentPrice}</p>
        </td>

        <td className='whitespace-nowrap px-4 py-2'>
          <div
            className={clsx(
              'text-sm font-semibold',
              coin.price_change_percentage_24h < 0 && 'text-red-300',
              coin.price_change_percentage_24h >= 0 && 'text-green-300'
            )}
          >
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        </td>

        <td className='whitespace-nowrap px-4 py-2'>
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

export default CoinRow;
