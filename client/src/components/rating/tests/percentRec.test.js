const percentRec = require ('../helpers/percentRec');

const noReviews = {
  false: '0',
  true: '0'
};

const percentToInt = {
  false: '36',
  true: '400'
};

test('Returns null when there are no reviews', () => {
  expect(percentRec(noReviews)).toBe(null);
});

test('Should round percentage to nearest whole number', () => {
  expect(percentRec(percentToInt)).toBe(92);
});
