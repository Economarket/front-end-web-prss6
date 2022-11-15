import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import IconChevronLeft from "../../assets/icons/chevronLeft";
import IconChevronRigth from "../../assets/icons/chevronRight";
import { Button, ButtonContainer, CaroselContainer, CarouselItem, CarouselList, CarouselViewport } from "./index.styled";


const Carousel: React.FC<{ children: JSX.Element[]}> = ({ children }) => {
    const [emblaRef, embla] = useEmblaCarousel({
        skipSnaps: false,
        loop: true,
        dragFree: false,
        align: "start",
        containScroll: "trimSnaps",
      });

    const scrollNext = useCallback(() => {
        if (!embla) {
          return;
        }
        embla.scrollNext();
      }, [embla]);
    
      const scrollPrev = useCallback(() => {
        if (!embla) {
          return;
        }
        embla.scrollPrev();
      }, [embla]);

    return (
        <CaroselContainer>
            <ButtonContainer>
                <Button onClick={() => scrollPrev()}>{<IconChevronLeft/>}</Button>
                <Button onClick={() => scrollNext()}>{<IconChevronRigth/>}</Button>
            </ButtonContainer>
            <CarouselViewport ref={emblaRef}>
                <CarouselList>
                    {children.map(i => (<CarouselItem>{i}</CarouselItem>))}
                </CarouselList>
            </CarouselViewport>
        </CaroselContainer>
    );
};

export default Carousel;