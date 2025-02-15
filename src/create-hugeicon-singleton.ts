import { createElement, forwardRef, ForwardRefExoticComponent, ReactSVG, RefAttributes, SVGProps } from 'react';

const defaultAttributes = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
};

export type IconSvgElement = readonly (readonly [string, { readonly [key: string]: string | number }])[];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface HugeiconsProps extends ComponentAttributes {
  size?: string | number;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  altIcon?: IconSvgElement;
  showAlt?: boolean;
  icon?: IconSvgElement;
}

export type HugeiconsIcon = ForwardRefExoticComponent<HugeiconsProps>;

const createHugeiconSingleton = (
  iconName: string,
  svgElements: IconSvgElement,
): React.FC<React.PropsWithoutRef<HugeiconsProps> & React.RefAttributes<SVGSVGElement>> => {
  const Component = forwardRef<SVGSVGElement, HugeiconsProps>(
    (
      {
        color = 'currentColor',
        size = 24,
        strokeWidth,
        absoluteStrokeWidth = false,
        className = '',
        altIcon,
        showAlt = false,
        icon,
        ...rest
      },
      ref,
    ) => {
      const calculatedStrokeWidth = strokeWidth !== undefined
        ? (absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth)
        : undefined;

      const elementProps = {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        color,
        className,
        ...(calculatedStrokeWidth !== undefined && {
          strokeWidth: calculatedStrokeWidth,
          stroke: 'currentColor'
        }),
        ...rest,
      };

      const currentIcon = showAlt && altIcon ? altIcon : svgElements;

      // Create SVG children without adding them as an icon prop
      const svgChildren = currentIcon.map(([tag, attrs]) => {
        return createElement(tag, { ...attrs, key: attrs.key });
      });

      return createElement(
        'svg',
        elementProps,
        svgChildren
      );
    },
  );

  Component.displayName = `${iconName}Icon`;

  return Component;
};

export default createHugeiconSingleton; 