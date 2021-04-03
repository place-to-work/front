import cn from 'classnames';
import * as React from 'react';
import Slider from 'react-slick';
import { ArrowDir } from '../Icon/components/ArrowDirIcon';
import './Carousel.scss';
import { ArrowsMode } from './components/Arrow';
import Arrow from './components/Arrow';
import Paginator from './components/Paginator';
import {NodeJSAndCommonJS} from "eslint/rules/node-commonjs";

export type CarouselProps = {
  withPaginator?: boolean;
  withFade?: boolean;
  centerMode?: boolean;
  arrowsMode?: ArrowsMode;
  children?: React.ReactNode;
  slidesToShow?: number;
  infinite?: boolean;
  variableWidth?: boolean;
  slidesToScroll?: number;
  className?: string;
  adaptiveHeight?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({
  withPaginator = true,
  centerMode = false,
  withFade = false,
  arrowsMode = ArrowsMode.hovered,
  children,
  slidesToShow = 1,
  infinite = true,
  variableWidth = false,
  slidesToScroll = 1,
  adaptiveHeight = false,
  className = ''
}: CarouselProps) => {
  const speed = 500; // Скорость анимации и время задержки перехода, чтобы не лагало

  const [selectedSlide, setSelectedSlide] = React.useState(0);

  const refSlider = React.useRef<Slider>(null);

  // Предотвращает переходы по ссылкам при свайпе
  const [swiped, setSwiped] = React.useState(false);
  const handleOnItemClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      // Если touch устройство
      if (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      ) {
        setSwiped(false);
        return;
      }

      if (swiped) {
        e.stopPropagation();
        e.preventDefault();
        setSwiped(false);
      }
    },
    [swiped]
  );
  const swipeEvent = React.useCallback(() => {
    setSwiped(true);
  }, []);

  children = React.Children.toArray(children).filter(o => o);

  const slides: number[] = Array.from(
    Array(React.Children.count(children)).keys()
  );
  const slidesCount = slides.length;

  const timeout = React.useRef<any>();

  React.useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, [timeout]);

  const beforeChange = React.useCallback(
    (_: number, next: number): void => {
      timeout.current = setTimeout(() => setSelectedSlide(next), speed);
    },
    [timeout, speed]
  );

  const onPaginationSelect = React.useCallback(
    (index: number) => {
      if (refSlider.current) {
        refSlider.current.slickGoTo(index);
        setSelectedSlide(index);
      }
    },
    [refSlider]
  );

  const sliderSettings =
    slidesCount > 1
      ? {
          infinite,
          speed,
          slidesToScroll,
          slidesToShow,
          adaptiveHeight,
          centerMode,
          arrows: arrowsMode !== ArrowsMode.none,
          beforeChange,
          swipeEvent,
          prevArrow: (
            <Arrow dir={ArrowDir.left} fade={withFade} arrowMode={arrowsMode} />
          ),
          nextArrow: (
            <Arrow
              dir={ArrowDir.right}
              fade={withFade}
              arrowMode={arrowsMode}
            />
          ),
          variableWidth
        }
      : {
          infinite: false,
          slidesToShow: 1,
          centerMode,
          arrows: false,
          adaptiveHeight
        };

  return (
    <div className={cn('carousel', className)}>
      <Slider
        ref={refSlider}
        {...sliderSettings}
        styleName="carousel__slider"
        rows={1}
      >
        {React.Children.map(children, child => (
          <div
            onClickCapture={handleOnItemClick}
            className="carousel__slider__element"
          >
            {child}
          </div>
        ))}
      </Slider>
      {slidesCount > 1 && withPaginator && (
        <Paginator
          selected={selectedSlide}
          slidesCount={slidesCount}
          onSelect={onPaginationSelect}
        />
      )}
    </div>
  );
};

export default Carousel;
