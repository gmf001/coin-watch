async function getCoinData(coin: string): Promise<CoinData> {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
  return res.json();
}

interface Props {
  params: {
    coin: string;
  };
}

export default async function Head({ params }: Props) {
  const coin = await getCoinData(params.coin);
  const title = `CoinWatch | ${coin.name}`;

  return (
    <>
      <title>{title}</title>
    </>
  );
}
