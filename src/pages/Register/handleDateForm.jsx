export const handleDateForm = date => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const finalForm = `${year}${month}${day}`;
  return finalForm;
};
