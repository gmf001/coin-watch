import CoinTable from './components/coin-table';
import { HOME_ENDPOINT } from '@/const';
import { type Coin } from '@/types';

async function getData(): Promise<Coin[]> {
  const res = await fetch(HOME_ENDPOINT);
  if (!res.ok) return [];
  return res.json();
}

async function HomePage() {
  const coins = await getData();
  return <CoinTable coins={coins} />;
}

export default HomePage;
