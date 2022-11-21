const discountedPriceMap = {
  1: 8, // single book price
  2: 15.2, // 2 book discount price
  3: 21.6, // 3 book discount price
  4: 25.6, // 4 book discount price
  5: 30 // 5 book discount price
};

const getBookMap = (books) => {
  const map = {};
  books.forEach(book => {
    if (map[book] !== undefined) {
      map[book]++;
    } else {
      map[book] = 1;
    }
  });

  return map;
};

export const cost = (books) => {
  let totalCost = 0;
  const booksMap = getBookMap(books);
  const booksMapEntries = Object.entries(booksMap);
  return totalCost * 100;
};
