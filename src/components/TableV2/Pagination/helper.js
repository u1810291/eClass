export const buttons = (aLabel, pageCount) => {
  if (pageCount <= 7) {
    return [...Array(pageCount).keys()].map((k) => k + 1);
  }
  return [...Array(7).keys()].map((_, index) => {
    switch (index) {
    case 0: return 1;
    case 1: return aLabel >= 4 ? '...' : 2;
    case 2: {
      if (aLabel - 2 <= 1) return 3;
      if (pageCount - aLabel < 4) return pageCount - 4;
      return aLabel - 1;
    }
    case 3: {
      if (pageCount - aLabel <= 3) return pageCount - 3;
      if (aLabel < 4) return 4;
      return aLabel;
    }
    case 4: {
      if (pageCount - aLabel <= 3) return pageCount - 2;
      if (aLabel < 4) return 5;
      return aLabel + 1;
    }
    case 5: return pageCount - aLabel <= 2 ? pageCount - 1 : '...';
    case 6: return pageCount;
    default: return '';
    }
  });
};
