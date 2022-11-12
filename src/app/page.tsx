import { PriceTable } from '@/components/PriceTable';
import { Suspense } from 'react';

async function getData() {
	const res = await fetch(
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&sparkline=true&per_page=100&page=1&price_change_percentage=24h%2C7d',
		{ next: { revalidate: 10 } }
	);
	return res.json();
}

export default async function Home() {
	const data = await getData();

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
				<Suspense fallback={<div></div>}>
					<PriceTable data={data} />
				</Suspense>
			</table>
		</div>
	);
}
