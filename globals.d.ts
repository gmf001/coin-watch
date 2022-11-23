export declare global {
  type Coin = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    total_volume: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    total_supply: number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
    sparkline_in_7d: {
      price: number[];
    };
  };

  type CoinData = {
    name: string;
    description: {
      en: string;
    };
    image: {
      large: string;
    };
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
    };
  };
}
