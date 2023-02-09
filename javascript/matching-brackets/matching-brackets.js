export const isPaired = (sequence) => {
  const stack = [];
  const brackets = sequence.match(/[\[\]\(\)\{\}]/g) || [];

  for (const bracket of brackets) {
    const isOpeningBracket = bracket === '[' || bracket === '(' || bracket === '{';
    if (isOpeningBracket) {
      stack.push(bracket);
      continue;
    }

    // Stack cannot be empty at this point.
    if (stack.length === 0) {
      return false;
    }

    const joinedBrackets = stack.pop() + bracket;
    const matchingSquareBracket = joinedBrackets === '[]';
    const matchingRoundBracket = joinedBrackets === '()';
    const matchingBrace = joinedBrackets === '{}';
    if (!matchingBrace && !matchingRoundBracket && !matchingSquareBracket) {
      return false;
    }
  }

  return stack.length === 0;
};
