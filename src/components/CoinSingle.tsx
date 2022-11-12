import clsx from 'clsx';
import Image from 'next/image';

interface Props {
	params: {
		coin: string;
	};
	coinData: {
		image: {
			large: string;
		};
		name: string;
		links: {
			homepage: string[];
			twitter_screen_name: string;
		};
		market_data: {
			price_change_percentage_24h: number;
			current_price: {
				aud: number;
			};
			market_cap: {
				aud: number;
			};
			sparkline_7d: {
				price: number[];
			};
		};
		description: {
			en: string;
		};
	};
}

export const CoinSingle = ({ params, coinData }: Props) => {
	return (
		<div className='flex flex-col space-y-5'>
			<div className='flex space-x-4 items-center'>
				<div className='relative h-20 w-20 rounded-full overflow-hidden'>
					<Image src={coinData.image.large} alt={params.coin} fill />
				</div>

				<div className='space-y-1'>
					<h2 className='font-bold text-3xl'>{coinData.name}</h2>
					<div className='space-x-5 font-semibold'>
						<span className='text-primary '>
							{Intl.NumberFormat(undefined, {
								style: 'currency',
								currency: 'AUD'
							}).format(coinData.market_data.current_price.aud)}
						</span>
						<span
							className={clsx(
								coinData.market_data.price_change_percentage_24h < 0
									? 'text-red-300'
									: 'text-green-300'
							)}>
							{coinData.market_data.price_change_percentage_24h.toFixed(2)}%
						</span>
					</div>
				</div>
			</div>
			<div className='flex items-center space-x-4'>
				<a
					href={coinData.links.homepage[0]}
					target='_blank'
					className='px-8 py-3 bg-dark-blue hover:bg-dark-blue/80 text-white rounded-lg font-bold text-sm'
					rel='noreferrer'>
					Website
				</a>
				<a
					href={`https://twitter.com/${coinData?.links?.twitter_screen_name}`}
					target='_blank'
					className='px-8 py-3 bg-dark-blue hover:bg-dark-blue/80 text-white rounded-lg font-bold text-sm'
					rel='noreferrer'>
					Twitter
				</a>
			</div>
			<div className='py-5 space-y-2'>
				<h2 className='font-bold text-lg'>About {coinData?.name}</h2>
				<p className='line-clamp-5'>{coinData?.description?.en}</p>
			</div>
			<div className='grid grid-cols-3 gap-5'>
				<div className='divide-y divide-pink-500 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 flex flex-col'>
					<div className='p-5 text-sm font-bold uppercase'>
						<span>Market cap</span>
					</div>
					<div className='px-5 py-7 font-semibold truncate'>
						{Intl.NumberFormat(undefined, {
							style: 'currency',
							currency: 'AUD',
							compactDisplay: 'short'
						}).format(coinData?.market_data?.market_cap?.aud)}
					</div>
				</div>
				<div className='divide-y divide-cyan-500 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 flex flex-col'>
					<div className='p-5 text-sm font-bold uppercase'>
						<span>24h Volume</span>
					</div>
					<div className='px-5 py-7 font-semibold truncate'>
						{Intl.NumberFormat(undefined, {
							style: 'currency',
							currency: 'AUD',
							compactDisplay: 'short'
						}).format(coinData?.market_data?.market_cap?.aud)}
					</div>
				</div>
				<div className='divide-y divide-teal-500 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 flex flex-col'>
					<div className='p-5 text-sm font-bold uppercase'>
						<span>Circulating Supply</span>
					</div>
					<div className='px-5 py-7 font-semibold truncate'>
						{Intl.NumberFormat(undefined, {
							style: 'currency',
							currency: 'AUD',
							compactDisplay: 'short'
						}).format(coinData?.market_data?.market_cap?.aud)}
					</div>
				</div>
			</div>
		</div>
	);
};
