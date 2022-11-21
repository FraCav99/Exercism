/**
 * You can check out all other solutions at 👇
 * https://github.com/FraCav99/Exercism
 */

const SECONDS_IN_A_EARTH_YEAR = 31557600;

const planetsSeconds = {
  'mercury': 0.2408467 * SECONDS_IN_A_EARTH_YEAR,
  'venus': 0.61519726 * SECONDS_IN_A_EARTH_YEAR,
  'mars': 1.8808158 * SECONDS_IN_A_EARTH_YEAR,
  'jupiter': 11.862615 * SECONDS_IN_A_EARTH_YEAR,
  'saturn': 29.447498 * SECONDS_IN_A_EARTH_YEAR,
  'uranus': 84.016846 * SECONDS_IN_A_EARTH_YEAR,
  'neptune': 164.79132 * SECONDS_IN_A_EARTH_YEAR,
  'earth': SECONDS_IN_A_EARTH_YEAR
};

export const age = (planet, seconds) => {
  const earthYears = seconds / planetsSeconds[planet];
  return +earthYears.toFixed(2);
}