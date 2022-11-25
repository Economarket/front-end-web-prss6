import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import theme from "../../styles/theme";

interface RangeDistanceProps {
  defaultValue: number;
  setValue: (value: number) => void;
}

const RangeDistance: React.FC<RangeDistanceProps> = ({
  defaultValue,
  setValue,
}) => {
  const getValue = (e: number | number[]) => {
    if (e) {
      setValue(Array.isArray(e) ? e[0] : e);
    }
  };

  return (
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
  );
};

export default RangeDistance;
