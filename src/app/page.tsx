import CoinTable from '@/components/coin-table';
import { HOME_ENDPOINT } from '@/const';

async function getData() {
  const res = await fetch(HOME_ENDPOINT);
  if (!res.ok) return [];
  return res.json();
}

export default async function HomePage() {
  const coins = await getData();
  return <CoinTable coins={coins} />;
}
