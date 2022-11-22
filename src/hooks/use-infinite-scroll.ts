import { useState } from "react";
import { useEventListener } from "usehooks-ts";

interface ReturnUseInfiniteScroll {
  callApi: boolean;
}

interface UseInfiniteScrollProps {
  changePxBottomBeforeCall?: number;
  waitDispatchFinish: boolean;
}

export const useInfiniteScroll = ({
  changePxBottomBeforeCall = 1,
  waitDispatchFinish,
}: UseInfiniteScrollProps): ReturnUseInfiniteScroll => {
  const [callApi, setCallApi] = useState<boolean>(false);

  const handleScroll = (event: any) => {
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      event.target.documentElement.scrollTop + window.innerHeight
    );
    if (
      currentHeight + changePxBottomBeforeCall >= scrollHeight &&
      !waitDispatchFinish
    ) {
      setCallApi(true);
    } else {
      setCallApi(false);
    }
  };

  useEventListener("scroll", handleScroll);
  return { callApi };
};
