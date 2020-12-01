export const MAX_MOBILE_WIDTH = 599;
export const MIN_TABLET_WIDTH = 600;
export const MAX_TABLET_WIDTH = 959;
export const MAX_DESKTOP_WIDTH = 960;

export const device = {
  mobile: `(max-width: ${MAX_MOBILE_WIDTH}px)`,
  tablet: `(max-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH}px) and `,
  dexktop: `(max-width: ${MAX_DESKTOP_WIDTH}px)`,
};

export const MOBILE = `(max-width: ${MAX_MOBILE_WIDTH}px)`;
export const TABLET = `(max-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH}px) `;
export const DESKTOP = `(max-width: ${MAX_DESKTOP_WIDTH}px)`;
