const avgRatingFinder = require ('./averageNumber');
const sampleData = [5, 0, 0, 0, 0];

test('Returns average rating of 1', () => {
  expect(avgRatingFinder(sampleData)).toBe(1);
});
