var shuffle = function(array) {
  var newArray = []
  var innerFunction = function(items) {
    if(items.length === 0){ return newArray; }
    var index = Math.floor(Math.random()* items.length)
    newArray.push(items[index]);
    var deleted = items.splice(index, 1);
    innerFunction(items);
  }
  innerFunction(array);
  return newArray
};

export default function combineThem(related, product) {
  var combined = [];
  var relatedCopy = []
  var productCopy = []
  var combinedArray = [];

  for (let feature of related) {
    relatedCopy.push(feature.value)
    combined.push(feature.value);
  }
  for (let item of product) {
    productCopy.push(item.value)
    if (!combined.includes(item.value)) {
      combined.push(item.value);
    }
  }
  console.log({combined});
  combined = shuffle(combined);
  console.log({related})
  for (let item of combined) {
    var allFeatures = {};
    allFeatures.feature = item;
    allFeatures.hasProductFeature = false;
    allFeatures.hasRelatedFeature = false;
    if (relatedCopy.includes(item)) {
      allFeatures.hasRelatedFeature = true;
    }
    if (productCopy.includes(item)) {
      allFeatures.hasProductFeature = true;
    }
    combinedArray.push(allFeatures);
  }

  return combinedArray;
}
