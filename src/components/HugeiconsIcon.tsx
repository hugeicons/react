import { FC } from 'react';
import createHugeiconSingleton, { HugeiconsProps, IconSvgElement } from '../create-hugeicon-singleton';

export interface HugeiconsIconProps extends Omit<HugeiconsProps, 'ref' | 'altIcon'> {
  icon: IconSvgElement;
  altIcon?: IconSvgElement;
}

export const HugeiconsIcon: FC<HugeiconsIconProps> = (props) => {
  const Component = createHugeiconSingleton("HugeiconsIcon", props.icon);
  return <Component {...props} />;
};

export default HugeiconsIcon; 