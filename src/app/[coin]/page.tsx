import { notFound } from 'next/navigation';
import { API_URL } from '@/const';
import { CoinCards, CoinInfo } from '@/components/coin-single';
import { type CoinSingle } from '@/types';

async function getData(coin: string): Promise<CoinSingle> {
  const res = await fetch(API_URL.concat(`/${coin}`));
  if (!res.ok) return notFound();
  return res.json();
}

interface Props {
  params: { coin: string };
}

async function CoinPage({ params }: Props) {
  const coin = await getData(params.coin);

  return (
    <div className='flex flex-col space-y-8'>
      <CoinInfo coin={coin} />
      <CoinCards coin={coin} />
    </div>
  );
}

export default CoinPage;
