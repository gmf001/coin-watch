import { CoinSingle } from '@/types';
import valueFormatter from '@/utils/formatter';

interface Props {
  coin: CoinSingle;
}

function CoinCards({ coin }: Props) {
  const currentMarketcap = valueFormatter(coin.market_data.market_cap.aud);

  return (
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
  );
}

export default CoinCards;
