import { noop } from '@five/utils/src/noop';

import cn from 'classnames';
import * as React from 'react';
import ButtonArrow from 'components/ButtonArrow';
import { ArrowDir } from 'components/Icon';
import { ArrowsMode } from './config';

import './Arrow.module.scss';

type Props = {
  onClick?: () => void;
  dir: ArrowDir;
  fade?: boolean;
  withPaginator?: boolean;
  arrowMode?: ArrowsMode;
};

const Arrow: React.FC<Props> = ({
  dir,
  onClick = noop,
  fade = false,
  withPaginator = false,
  arrowMode = ArrowsMode.hovered
}: Props) => {
  return (
    <div
      styleName={cn(
        'container',
        withPaginator && 'container_with-paginator',
        dir === ArrowDir.left && 'container_left',
        dir === ArrowDir.right && 'container_right',
        fade && 'container_fade'
      )}
    >
      <ButtonArrow
        styleName={cn('container__arrow', `container__arrow_${arrowMode}`)}
        dir={dir}
        onClick={onClick}
      />
    </div>
  );
};
export default React.memo(Arrow);
