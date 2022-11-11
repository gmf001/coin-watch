import Link from 'next/link';

export function Header() {
	return (
		<header className='bg-dark-blue p-8 w-full rounded-b-3xl min-h-[300px]'>
			<div className='container max-w-2xl'>
				<div className='pt-20 pb-10 text-center space-y-3'>
					<Link href='/'>
						<h1 className='text-3xl font-extrabold hover:underline'>
							🤑 Crypto Prices 🤑
						</h1>
					</Link>
					<div>
						<a
							href='https://github.com/gmf001/crypto-prices'
							target='_blank'
							className='text-blue-200 text-xs hover:text-primary uppercase font-bold'
							rel='noreferrer'>
							View on Github
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
