const averageNumber = (obj) => {
  let result = 0;
  let reviews = 0;

  for (const rating in obj) {
    let reviewCount = Number(obj[rating]);
    result += reviewCount * Number(rating);
    reviews += Number(obj[rating]);
  }

  if (reviews === 0) {
    return '0.0';
  } else {
    let average = result / reviews;
    let rounded = Math.round(average * 10) / 10;
    parseFloat(rounded.toFixed(1));
    return rounded;
  }
};

module.exports = averageNumber;
