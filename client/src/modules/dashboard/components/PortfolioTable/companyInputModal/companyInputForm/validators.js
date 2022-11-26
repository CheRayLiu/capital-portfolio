export const numberValidator = ({ min = 0, max = 100 }) => {
  return {
    min: {
      value: min,
      message: `Please enter a value greater than ${min}`,
    },
    max: {
      value: max,
      message: `Please enter a value smaller than ${max}`,
    },
    pattern: {
      value: /^[0-9]*$/,
      message: 'Must be a number',
    },
  };
};
