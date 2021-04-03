import cn from 'classnames';
import * as React from 'react';

import './Dot.module.scss';

type Props = {
  selected: number;
  index: number;
  onSelect: (index: number) => void;
};

const Dot: React.FC<Props> = ({ selected, index, onSelect }: Props) => {
  const dotClick = React.useCallback(() => onSelect(index), [index]);
  return (
    <div
      styleName={cn(
        'paginator__dot',
        index === selected && 'paginator__dot_current'
      )}
      onClick={dotClick}
    />
  );
};
export default React.memo(Dot);
