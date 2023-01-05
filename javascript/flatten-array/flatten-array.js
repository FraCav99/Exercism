export const flatten = (array) => array.flat(Infinity).filter(item => item !== null);

// Alternative way
/*export const flatten = (array) => array
  .filter(item => item !== null)
  .reduce((acc, item) => {
    const nextItem = Array.isArray(item) ? flatten(item) : item;
    return acc.concat(nextItem);
  }, [])*/