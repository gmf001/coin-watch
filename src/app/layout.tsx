import { PropsWithChildren } from 'react';
import '../styles/globals.css';

export default function Root({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body className='bg-dark text-white'>{children}</body>
		</html>
	);
}
