export const score = (x, y) => {
  const distanceFromOrigin = Math.sqrt((x * x) + (y * y));

  if (distanceFromOrigin <= 1) {
    return 10;
  }

  if (distanceFromOrigin <= 5) {
    return 5;
  }

  if (distanceFromOrigin <= 10) {
    return 1;
  }

  return 0;
};