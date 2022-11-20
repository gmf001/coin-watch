export declare global {
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
