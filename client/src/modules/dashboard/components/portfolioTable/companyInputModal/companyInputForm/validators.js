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
      value: /^\d*\.?\d*$/,
      message: 'Must be a number',
    },
  };
};
