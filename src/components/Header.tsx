import Link from 'next/link';

function Header() {
  return (
    <header className='min-h-[300px] w-full rounded-b-3xl bg-dark-blue p-8'>
      <div className='container max-w-2xl'>
        <div className='space-y-3 pt-20 pb-10 text-center'>
          <Link href='/'>
            <h1 className='text-3xl font-extrabold hover:underline'>
              🤑 Crypto Prices 🤑
            </h1>
          </Link>
          <div>
            <a
              href='https://github.com/gmf001/crypto-prices'
              target='_blank'
              className='text-xs font-bold uppercase text-blue-200 hover:text-primary'
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
