// generating random number in range [x, y)
const getRandomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Generating random integer in range [x, y)
// The maximum is exclusive and the minimum is inclusive
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// generating random date in range [x, y)
const getRandomDate = (start, end) => {
  return new Date(
    start.getTime() +
      Math.random() * (end.getTime() - start.getTime())
  );
};

module.exports = { getRandomNum, getRandomInt, getRandomDate };
