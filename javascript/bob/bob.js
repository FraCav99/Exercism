/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

const isAQuestion = message => message.endsWith('?');
const isYelling = message => message.toUpperCase() === message && message.toLowerCase() !== message;
const isYellingQuestion = message => isAQuestion(message) && isYelling(message);
const isSilence = message => message.length === 0;
const whatever = () => true;

const bobResponses = [
  {test: isSilence, response: 'Fine. Be that way!'},
  {test: isYellingQuestion, response: 'Calm down, I know what I\'m doing!'},
  {test: isYelling, response: 'Whoa, chill out!'},
  {test: isAQuestion, response: 'Sure.'},
  {test: whatever, response: 'Whatever.'}
]

export const hey = (message) => {
  const trimmed = message.trim();
  return bobResponses.find(({test}) => test(trimmed)).response;
};
