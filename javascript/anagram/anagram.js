export const findAnagrams = (word, anagramList) => {
  const wordLowerCase = word.toLowerCase(); 
  const lowerWordSort = [...wordLowerCase].sort().join('');

  return anagramList.filter((item) => {
    const itemLowerCase = item.toLowerCase();
    const isEqualToWord = wordLowerCase === itemLowerCase;
    const isAnagram = [...itemLowerCase].sort().join('') === lowerWordSort;
    return !isEqualToWord && isAnagram;
  });
};
