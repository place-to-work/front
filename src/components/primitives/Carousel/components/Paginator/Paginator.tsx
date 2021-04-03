import { range } from '@five/utils/src/range';
import * as React from 'react';
import Dot from './components/Dot';

import './Paginator.module.scss';

type Props = {
  selected: number;
  slidesCount: number;
  onSelect: (index: number) => void;
};

const Paginator: React.FC<Props> = ({
  selected,
  slidesCount,
  onSelect
}: Props) => {
  return (
    <div styleName="paginator">
      {range(slidesCount).map((i: number) => (
        <Dot key={i} selected={selected} index={i} onSelect={onSelect} />
      ))}
    </div>
  );
};
export default React.memo(Paginator);
