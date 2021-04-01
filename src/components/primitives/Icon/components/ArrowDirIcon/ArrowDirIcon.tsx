import cn from 'classnames';
import * as React from 'react';
import BaseIcon, { BaseIconProps } from '../BaseIcon';
import { ArrowDir, ArrowView } from './config';
import './ArrowDirIcon.scss';

export type ArrowDirIconProps = BaseIconProps & {
  dir?: ArrowDir;
  view?: ArrowView;
};

const arrowSvgProps = {
  [ArrowView.func]: { width: '24', height: '24', viewBox: '0 0 24 24' },
  [ArrowView.common]: { width: '12', height: '24', viewBox: '0 0 12 24' },
  [ArrowView.double]: { width: '24', height: '24', viewBox: '0 0 24 24' }
};

const arrowSvgPaths = {
  [ArrowView.common]: (
    <path
      d="M0.926791 14.2719L10.194 23.6853C10.6065 24.1042 11.2759 24.105 11.6894 23.6871C12.1028 23.2692 12.1037 22.5909 11.6912 22.1719L2.42308 12.7576C2.01088 12.3398 2.01088 11.6601 2.42404 11.2415L11.6912 1.82803C12.1036 1.40913 12.1028 0.730731 11.6894 0.312841C11.483 0.104245 11.2127 0 10.9426 0C10.6716 0 10.4005 0.104939 10.1939 0.314768L0.92769 9.72717C-0.309079 10.9804 -0.309079 13.0196 0.926791 14.2719Z"
      fill="currentColor"
    />
  ),
  [ArrowView.func]: (
    <path
      d="M9.03861 22.2217L0.821749 13.9846C-0.274048 12.8888 -0.274048 11.1044 0.822544 10.0078L9.03856 1.77153C9.22175 1.58792 9.46208 1.49609 9.70236 1.49609C9.94189 1.49609 10.1815 1.58731 10.3645 1.76984C10.7311 2.13552 10.7318 2.72914 10.3662 3.0957L2.1493 11.3329C1.78297 11.6992 1.78297 12.294 2.14845 12.6595L10.3662 20.8975C10.7318 21.2641 10.7311 21.8577 10.3645 22.2234C9.9979 22.589 9.40433 22.5883 9.03861 22.2217ZM23.0618 12.9307L6.04528 12.9307C5.52745 12.9307 5.10774 12.511 5.10774 11.9932C5.10774 11.4754 5.52745 11.0556 6.04528 11.0556L23.0618 11.0556C23.5796 11.0556 23.9993 11.4754 23.9993 11.9932C23.9993 12.511 23.5796 12.9307 23.0618 12.9307Z"
      fill="currentColor"
    />
  ),
  [ArrowView.double]: (
    <>
      <path
        d="M11.8124 13.988L21.4173 23.7247C21.7789 24.0912 22.3657 24.0918 22.7279 23.7261C23.0902 23.3604 23.0908 22.7668 22.7293 22.4003L13.1237 12.6629C12.7623 12.2974 12.7623 11.7026 13.1244 11.3364L22.7293 1.59969C23.0908 1.23317 23.0902 0.63959 22.7279 0.273871C22.547 0.0912464 22.3101 -1.71661e-05 22.0733 -1.71661e-05C21.8358 -1.71661e-05 21.5983 0.091762 21.4173 0.275278L11.8131 10.0113C10.7291 11.1079 10.7291 12.8922 11.8124 13.988Z"
        fill="currentColor"
      />
      <path
        d="M1.8124 13.988L11.4173 23.7247C11.7789 24.0912 12.3657 24.0918 12.7279 23.7261C13.0902 23.3604 13.0908 22.7668 12.7293 22.4003L3.12368 12.6629C2.76235 12.2974 2.76235 11.7026 3.12438 11.3364L12.7293 1.59969C13.0908 1.23317 13.0902 0.639589 12.7279 0.27387C12.547 0.0912455 12.3101 -1.71661e-05 12.0733 -1.71661e-05C11.8358 -1.71661e-05 11.5983 0.0917625 11.4173 0.275278L1.81309 10.0113C0.729087 11.1079 0.729086 12.8922 1.8124 13.988Z"
        fill="currentColor"
      />
    </>
  )
};

const ArrowDirIcon = ({
  dir = ArrowDir.left,
  className,
  view = ArrowView.common,
  ...props
}: ArrowDirIconProps) => {
  const boxProps = arrowSvgProps[view];

  return (
    <BaseIcon className={cn(`arrow-dir-icon arrow-dir-icon_${dir}`, className)}{...props} {...boxProps}>
      {arrowSvgPaths[view]}
    </BaseIcon>
  );
};

export { ArrowDirIcon as ArrowDirIconNonMemo };

const ArrowDirIconMemo = React.memo<ArrowDirIconProps>(ArrowDirIcon);
ArrowDirIconMemo.displayName = 'ArrowDirIcon';

export default ArrowDirIconMemo;
