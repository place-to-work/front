import cn from 'classnames';
import * as React from 'react';
import './Collapse.scss';

export type CollapseProps = {
  className?: string;
  children?: React.ReactNode;
  opened?: boolean;
  immediate?: boolean;
  full?: boolean;
};

const Collapse: React.FC<CollapseProps> = ({
  className,
  children,
  opened,
                                             full = false
}: CollapseProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const isInitialRender = React.useRef(true);

  React.useLayoutEffect(() => {
    const isCurrentInitialRender = isInitialRender.current;
    isInitialRender.current = false;

    if (!containerRef.current) {
      return;
    }

    if (!opened || !contentRef.current) {
      /**
       * Если это первый рендер и блок по умолчанию закрыт,
       * то не нужно переводить его из открытого состояния с анимацией в закрытое.
       * Нужно сразу его закрыть без анимации.
       */
      if (isCurrentInitialRender) {
        containerRef.current.style.height = '0px';
        return;
      }

      containerRef.current.style.height = `${containerRef.current.offsetHeight}px`;
      /**
       * Анимировать можно только из числового значения в числовое.
       * Поэтому перед коллапсом сначала из height='auto' задаем блоку его подсчитанную высоту.
       *
       * Поскольку Event Loop схлопывает два присваивания подряд,
       * запускаем присваниваине нулевой высоты в другой таске.
       */
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.height = '0px';
        }
      }, 0);
      return;
    }

    const animateTo = contentRef.current.offsetHeight;
    const realHeight = containerRef.current.offsetHeight;

    /**
     * При первом рендеринге блок уже открыт,
     * поэтому нельзя навешивать transitionend без изменения высоты.
     */
    if (realHeight === animateTo) {
      return;
    }

    containerRef.current.style.height = `${animateTo}px`;

    const setContainerRefToAuto = (e: Event): void => {
      if (e.target === containerRef.current && containerRef.current) {
        containerRef.current.style.height = 'auto';
        containerRef.current.removeEventListener(
          'transitionend',
          setContainerRefToAuto
        );
      }
    };

    containerRef.current.addEventListener(
      'transitionend',
      setContainerRefToAuto
    );

    return (): void => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          'transitionend',
          setContainerRefToAuto
        );
      }
    };
  }, [opened]);

  return (
    <div
      ref={containerRef}
      className={cn('collapse', opened && 'collapse_opened', full && 'collapse_full', className)}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default Collapse;
