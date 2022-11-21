// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
const JUICES_TIMES = {
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5
};

export function timeToMixJuice(name) {
  return name in JUICES_TIMES ? JUICES_TIMES[name] : 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limeCutted = 0, wedgesCutted = 0, i = 0;
  const wedgesFromLimeDimension = {
    'small': 6,
    'medium': 8,
    'large': 10
  };

  while(i < limes.length && wedgesNeeded > 0) {
    const currentLime = limes[i];
    wedgesCutted += wedgesFromLimeDimension[currentLime];
    limeCutted++;
    i++;
    
    if (wedgesCutted >= wedgesNeeded) {
      break;
    }
  }

  return limeCutted;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeLeftCopy = timeLeft, i = 0;

   do {
    const currentJuice = orders[i];
    timeLeftCopy -= timeToMixJuice(currentJuice);
    i++;
  } while(i < orders.length && timeLeftCopy > 0)

  return orders.slice(i);
}
