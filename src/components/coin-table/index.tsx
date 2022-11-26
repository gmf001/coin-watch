'use client';

import AutoAnimate from '../ui/auto-animate';
import CoinRow from './coin-row';

interface Props {
  coins: Coin[];
}

function CoinTable({ coins }: Props) {
  return (
    <AutoAnimate as='tbody'>
      {coins.map((coin) => (
        <CoinRow key={coin.id} coin={coin} />
      ))}
    </AutoAnimate>
  );
}

export default CoinTable;
