const averageNumber = require ('./averageNumber');

const sampleData1 = {
  3: '5',
};

const sampleData2 = {
  1: '36',
  2: '19',
  3: '57',
  4: '60',
  5: '173'
};

test('Returns average rating of 1', () => {
  expect(averageNumber(sampleData1)).toBe(3);
});

test('Should round average to 1 decimal place', () => {
  expect(averageNumber(sampleData2)).toBe(3.9);
});
