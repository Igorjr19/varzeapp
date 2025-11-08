export const isMobileDevice = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || '';

  const mobileRegex =
    /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  const isMobileUA = mobileRegex.test(userAgent);

  const hasTouchScreen =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    ((navigator as Navigator & { msMaxTouchPoints?: number })
      .msMaxTouchPoints || 0) > 0;

  const isSmallScreen = window.innerWidth <= 768;

  return isMobileUA && hasTouchScreen && isSmallScreen;
};

export const isTabletDevice = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || '';
  const tabletRegex = /ipad|android(?!.*mobile)|tablet/i;
  const isTabletUA = tabletRegex.test(userAgent);

  const hasTouchScreen =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    ((navigator as Navigator & { msMaxTouchPoints?: number })
      .msMaxTouchPoints || 0) > 0;

  const isTabletScreen = window.innerWidth > 768 && window.innerWidth <= 1024;

  return isTabletUA && hasTouchScreen && isTabletScreen;
};

export const isDesktop = (): boolean => {
  return !isMobileDevice() && !isTabletDevice();
};
