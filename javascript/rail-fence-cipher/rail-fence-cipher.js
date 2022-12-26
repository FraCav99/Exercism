const createGrid = (strLength, depth) => {
	const grid = [];
  for (let i = 0; i < depth; i++) {
  	const row = Array(strLength).fill(null);
    grid.push(row);
  }

  let row = 0, column = 0;
  let dirDown = false;
  for (column; column < strLength; column++) {
    grid[row][column] = '*';

    if (row === 0 || row === depth - 1) {
    	dirDown = !dirDown;
    }

    if (dirDown) {
    	row++;
    } else {
    	row--;
    }
  }

  return grid;
}

export const encode = (toEncode, depth) => {
  const strLength = toEncode.length;
  const grid = createGrid(strLength, depth);

  let row = 0, column = 0;
  let dirDown = false;
  for (column; column < strLength; column++) {
    grid[row][column] = toEncode[column];

    if (row === 0 || row === depth - 1) {
    	dirDown = !dirDown;
    }

    if (dirDown) {
    	row++;
    } else {
    	row--;
    }
  }

  return grid
    .flatMap(row => row)
    .join('');
};

export const decode = (toDecode, depth) => {
	const strLength = toDecode.length;
  const grid = createGrid(strLength, depth);

  let currentChar = 0;
  const filledGrid = grid.map(row => row.map(el => {
    	if (el === '*') {
      	el = toDecode[currentChar];
        currentChar++;
      }
      return el;
    })
  );
  
  let row = 0;
  let dirDown = false;
  let decoded = '';
  for (let column = 0; column < strLength; column++) {
    decoded += filledGrid[row][column];

    if (row === 0 || row === depth - 1) {
    	dirDown = !dirDown;
    }

    if (dirDown) {
    	row++;
    } else {
    	row--;
    }
  }

  return decoded;
};
