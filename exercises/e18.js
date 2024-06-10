/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  function maxBy(array, cb) {
    if (array.length === 0) {
      return undefined;
    }
    let minValue = cb(array[0]);
    let minElement = array[0];

    for (let i = 1; i < array.length; i++) {
      const callbackValue = cb(array[i]);
      if (callbackValue < minValue) {
        minValue = callbackValue;
        minElement = array[i];
      }
    }

    return minElement;
  }
  const yearCounts = data.asteroids.reduce((acc, asteroid) => {
    const year = asteroid.discoveryYear;
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const mostCommonYearEntry = Object.entries(yearCounts).reduce(
    (maxEntry, currentEntry) => {
      return currentEntry[1] > (maxEntry ? maxEntry[1] : 0)
        ? currentEntry
        : maxEntry;
    },
    null
  );

  return mostCommonYearEntry ? Number(mostCommonYearEntry[0]) : undefined;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
