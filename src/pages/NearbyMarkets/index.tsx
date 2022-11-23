import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import MarketCard from "../../components/MarketCard";
import RangeDistance from "../../components/RangeDistance";
import { useLocalization } from "../../contexts/localization";
import { getMarketByDistance } from "../../services/market";
import { Market } from "../../services/models";

import * as S from "../styles";

export default function NearbyMarkets() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const { locateX, locateY, distance, setDistance } = useLocalization();
  const debounceDistance = useDebounce<number>(distance, 500);

  const getMarkets = useCallback(async (dist: number, x: number, y: number) => {
    try {
      setMarkets(await getMarketByDistance(dist, x, y));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (locateX && locateY && debounceDistance) {
      getMarkets(debounceDistance, locateX, locateY);
    }
  }, [debounceDistance, getMarkets, locateX, locateY]);

  return (
    <S.Wrapper>
      <S.WrapperHead>
        <S.Title>Mercados próximos</S.Title>
        <S.WrapperRangeDistance>
          <S.WrapperTextFilter>
            <S.TextFilter>Escolha o raio</S.TextFilter>
            <S.TextFilter>{distance} km</S.TextFilter>
          </S.WrapperTextFilter>
          <RangeDistance defaultValue={distance} setValue={setDistance} />
        </S.WrapperRangeDistance>
      </S.WrapperHead>
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
