import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { Header } from '@/components/Header';

export default function Root({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<head>
				<title>Crypto Prices</title>
			</head>
			<body className='bg-dark min-h-screen text-white'>
				<Header />
				<main className='container max-w-5xl rounded-xl p-8 -mt-16 mb-20 bg-dark-accent'>
					{children}
				</main>
			</body>
		</html>
	);
}
