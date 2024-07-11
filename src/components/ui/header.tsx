import Link from 'next/link';

function Header() {
  return (
    <header className='min-h-[250px] w-full bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-8 sm:min-h-[350px]'>
      <div className='container max-w-2xl'>
        <div className='pt-10 pb-10 space-y-3 text-center sm:pt-20'>
          <Link href='/'>
            <h1 className='text-5xl font-bold hover:opacity-90'>CoinWatch</h1>
          </Link>
          <div>
            <a
              href='https://github.com/gmf001/coin-watch'
              target='_blank'
              className='text-base font-bold text-purple-400 uppercase hover:text-purple-200'
              rel='noreferrer'
            >
              View Github Repo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
