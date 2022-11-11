import clsx from 'clsx';
import Image from 'next/image';
import { Header } from '../components/Header';
import { Sparkline } from '../components/Sparkline';

async function getData() {
	const res = await fetch(
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&sparkline=true&per_page=100&page=1&price_change_percentage=24h%2C7d',
		{ next: { revalidate: 10 } }
	);
	return res.json();
}

export default async function Home() {
	const data = await getData();
	// console.log('data', data);

	return (
		<>
			<Header />
			<div className='container max-w-5xl rounded-xl p-8 -mt-16 mb-20 bg-dark-accent'>
				<div className='overflow-x-auto'>
					<table className='min-w-full'>
						<thead>
							<tr>
								<th className='whitespace-nowrap px-4 py-2 text-left'></th>
								<th className='whitespace-nowrap px-4 py-2 text-left'>Name</th>
								<th className='whitespace-nowrap px-4 py-2 text-left'>Price</th>
								<th className='whitespace-nowrap px-4 py-2 text-left'>
									% Change
								</th>
								<th className='whitespace-nowrap px-4 py-2 text-left'>
									Market Cap
								</th>
								<th className='whitespace-nowrap px-4 py-2 text-left'>
									Last 7 Days
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((coin: any, k: number) => (
								<tr
									key={k}
									className='h-14 px-4 bg-dark-accent hover:bg-dark-accent-1 group hover:cursor-pointer'>
									<td className='whitespace-nowrap px-4 py-2 group-hover:rounded-l-xl'>
										<div className='relative h-8 w-8 rounded-full bg-white overflow-hidden'>
											<Image src={coin.image} alt={coin.name} fill />
										</div>
									</td>

									<td className='whitespace-nowrap px-4 py-2'>
										<p className='font-semibold text-base'>{coin.name}</p>
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
												coin.price_change_percentage_24h >= 0 &&
													'text-green-300'
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

									<td className='whitespace-nowrap px-4 py-2 group-hover:rounded-r-xl'>
										<Sparkline
											data={coin.sparkline_in_7d.price}
											percentChange={
												coin.price_change_percentage_7d_in_currency
											}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
