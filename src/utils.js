export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const splittingDigits = (item) => {
  return (String(item)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
};

export const getPercent = (contribution, credit) => {
  return Math.round(contribution / (credit / 100));
};
