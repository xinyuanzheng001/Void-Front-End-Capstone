const avgRatingFinder = (array) => {
  let result = 0;
  let reviews = 0;

  for (let i = 0; i < array.length; i++) {
    result += Number(array[i]) * (i + 1);
    reviews += Number(array[i]);
  }
  return result / reviews;
};

module.exports = avgRatingFinder;