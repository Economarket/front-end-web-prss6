import { useCallback, useEffect, useState } from "react";
import MarketCard from "../../components/MarketCard";
import { useLocalization } from "../../contexts/localization";
import { getMarketByDistance } from "../../services/market";
import { Market } from "../../services/models";

import * as S from "../styles";

export default function NearbyMarkets() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const { locateX, locateY, distance } = useLocalization();

  const getMarkets = useCallback(async () => {
    try {
      if (locateX && locateY) {
        const response = await getMarketByDistance(distance, locateX, locateY);

        setMarkets(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, [distance, locateX, locateY]);

  useEffect(() => {
    getMarkets();
  }, [getMarkets]);

  return (
    <S.Wrapper>
      <S.Title>Mercados próximos</S.Title>
      <S.CardsMarketContainer>
        {markets.map((m) => {
          return (
            <MarketCard
              key={m.id}
              market={m}
              onClick={() => console.log(`Redirect to ${m.name} page...`)}
            />
          );
        })}
      </S.CardsMarketContainer>
    </S.Wrapper>
  );
}
