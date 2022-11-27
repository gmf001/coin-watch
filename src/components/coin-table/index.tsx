import CoinRow from './coin-row';

interface Props {
  coins: Coin[];
}

function CoinTable({ coins }: Props) {
  return (
    <tbody>
      {coins?.map((coin) => (
        <CoinRow key={coin.id} coin={coin} />
      ))}
    </tbody>
  );
}

export default CoinTable;
