import { Coin } from '@/types';
import Row from './row';

interface Props {
  coins: Coin[];
}

function CoinTable({ coins }: Props) {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-separate border-spacing-y-3'>
        <thead>
          <tr>
            <th className='whitespace-nowrap px-4 py-2 text-left'></th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>Name</th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>Price</th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>% Change</th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>
              Market Cap
            </th>
            <th className='whitespace-nowrap px-4 py-2 text-left'>
              Last 7 Days
            </th>
          </tr>
        </thead>

        <tbody>
          {coins?.map((c) => (
            <Row key={c.id} coin={c} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;
