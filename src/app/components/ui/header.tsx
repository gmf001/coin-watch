import Link from 'next/link';

function Header() {
  return (
    <header className='min-h-[250px] w-full bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-8 sm:min-h-[350px]'>
      <div className='container max-w-2xl'>
        <div className='space-y-3 pt-10 pb-10 text-center sm:pt-20'>
          <Link href='/'>
            <h1 className='text-4xl font-extrabold hover:opacity-90'>
              CoinWatch
            </h1>
          </Link>
          <div>
            <a
              href='https://github.com/gmf001/coin-watch'
              target='_blank'
              className='text-xs font-bold uppercase text-purple-100 hover:text-purple-200'
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
