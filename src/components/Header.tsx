import Link from 'next/link';

function Header() {
  return (
    <header className='min-h-[300px] w-full bg-primary-accent p-8'>
      <div className='container max-w-2xl'>
        <div className='space-y-3 pt-20 pb-10 text-center'>
          <Link href='/'>
            <h1 className='text-4xl font-extrabold hover:underline'>
              CoinWatch
            </h1>
          </Link>
          <div>
            <a
              href='https://github.com/gmf001/crypto-prices'
              target='_blank'
              className='text-xs font-bold uppercase text-cyan-100 hover:text-cyan-200'
              rel='noreferrer'
            >
              View on Github
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
