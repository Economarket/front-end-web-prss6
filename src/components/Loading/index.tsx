import ReactLoading from "react-loading";
import theme from "../../styles/theme";

export enum LoadingType {
    blank = "blank",
    balls = "balls",
    bars = "bars",
    bubbles = "bubbles",
    cubes = "cubes",
    cylon = "cylon",
    spin = "spin",
    spinningBubbles = "spinningBubbles",
    spokes = "spokes"
}

interface LoadingProps {
    loading: boolean,
    type?: LoadingType,
}
const Loading: React.FC<LoadingProps> = ({ loading, type }) => {
    return (
        <div 
            style={{
                position: "relative", 
                bottom: "0",
                left: "0",
                right: "0",
                margin: "auto",
                display: loading ? "block" : "none"
            }}
        >
            {loading && (
                <ReactLoading 
                    type={type || LoadingType.balls} 
                    color={theme.colors.blue200} 
                    height={200} 
                    width={200}
                />
            )}
        </div>
    );
}

export default Loading;