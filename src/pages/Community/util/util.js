export const getDate = () => {
  const currentDate = new Date();
  const options = { month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
};
