import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
      max={50}
      onChange={getValue}
      trackStyle={{ backgroundColor: "#004068" }}
      handleStyle={{
        borderColor: "#3B5249",
        backgroundColor: "#3B5249",
      }}
      railStyle={{ backgroundColor: "#d9d9d9" }}
    />
  );
};

export default RangeDistance;
