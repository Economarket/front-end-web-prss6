import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import theme from "../../styles/theme";
import * as S from "./styles";

interface RangeDistanceProps {
  defaultValue: number;
  setValue: (value: number) => void;
  distance: any;
}

const RangeDistance: React.FC<RangeDistanceProps> = ({
  defaultValue,
  setValue,
  distance,
}) => {
  const getValue = (e: number | number[]) => {
    if (e) {
      setValue(Array.isArray(e) ? e[0] : e);
    }
  };

  return (
    <>
      <S.WrapperRangeDistance>
        <S.WrapperTextFilter>
          <S.TextFilter>Escolha o raio</S.TextFilter>
          <S.TextFilter>{distance} km</S.TextFilter>
        </S.WrapperTextFilter>
        <Slider
          defaultValue={defaultValue}
          min={1}
          max={20}
          onChange={getValue}
          trackStyle={{ backgroundColor: theme.colors.blue200 }}
          handleStyle={{
            border: "none",
            backgroundColor: theme.colors.blue200,
          }}
          railStyle={{ backgroundColor: "#d9d9d9" }}
        />
      </S.WrapperRangeDistance>
    </>
  );
};

export default RangeDistance;
