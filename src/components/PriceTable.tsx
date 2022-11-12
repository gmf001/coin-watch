'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Sparkline } from './Sparkline';

export function PriceTable({ data }: { data: any[] }) {
	const router = useRouter();

	const handleNavigation = (id: string) => {
		router.push(`/${id}`);
	};

	return (
		<tbody>
			{data?.map((coin: any, k: number) => (
				<tr
					key={k}
					onClick={() => handleNavigation(coin.id)}
					className='h-14 px-4 w-full bg-dark-accent hover:bg-dark-accent-1 group hover:cursor-pointer'>
					<td className='whitespace-nowrap px-4 py-2 group-hover:rounded-l-xl'>
						<div className='relative h-8 w-8 rounded-full bg-white overflow-hidden'>
							<Image src={coin.image} alt={coin.name} fill />
						</div>
					</td>

					<td className='whitespace-nowrap px-4 py-2'>
						<p className='font-bold text-base'>{coin.name}</p>
					</td>

					<td className='whitespace-nowrap px-4 py-2'>
						<p className='text-sm font-semibold'>
							{Intl.NumberFormat(undefined, {
								style: 'currency',
								currency: 'AUD'
							}).format(coin.current_price)}
						</p>
					</td>

					<td className='whitespace-nowrap px-4 py-2'>
						<div
							className={clsx(
								'text-sm font-semibold',
								coin.price_change_percentage_24h < 0 && 'text-red-300',
								coin.price_change_percentage_24h >= 0 && 'text-green-300'
							)}>
							<p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
						</div>
					</td>

					<td className='whitespace-nowrap px-4 py-2'>
						<p className='text-sm font-semibold'>
							{Intl.NumberFormat(undefined, {
								style: 'currency',
								currency: 'AUD',
								compactDisplay: 'short'
							}).format(coin.market_cap)}
						</p>
					</td>

					<td className='whitespace-nowrap px-4 py-2 w-[120px] group-hover:rounded-r-xl'>
						<Sparkline
							data={coin.sparkline_in_7d.price}
							percentChange={coin.price_change_percentage_7d_in_currency}
						/>
					</td>
				</tr>
			))}
		</tbody>
	);
}
