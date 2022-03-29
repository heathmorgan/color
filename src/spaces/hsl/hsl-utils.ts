import HSLColorSpace from './types/hsl-color-space';
import { normalizePercent } from '../../common';

// eslint-disable-next-line import/prefer-default-export
export const adjustHSLRelativeValue = (
    space: HSLColorSpace,
    key: keyof Omit<HSLColorSpace, 'hue'>,
    ratio: number,
    increase: boolean
): HSLColorSpace => {
    const adjusted = { ...space };
    const normalized = normalizePercent(ratio, true);
    adjusted[key] += Math.round(
        adjusted[key] * normalized * (increase ? 1 : -1)
    );
    /* istanbul ignore next */ // Can't get this to trigger
    if (adjusted[key] < 0) adjusted[key] = 0;
    if (adjusted[key] > 100) adjusted[key] = 100;
    return adjusted;
};
