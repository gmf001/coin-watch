import { Suspense } from 'react';
import { CoinSingle } from '@/components/CoinSingle';

async function getData(coinId: string) {
	const res = await fetch(
		`https://api.coingecko.com/api/v3/coins/${coinId}?community_data=true&sparkline=true`,
		{ next: { revalidate: 10 } }
	);
	return res.json();
}

const CoinPage = async ({ params }: { params: { coin: string } }) => {
	const coinData = await getData(params.coin);

	return (
		<Suspense fallback={<></>}>
			<CoinSingle coinData={coinData} params={params} />
		</Suspense>
	);
};

export default CoinPage;
