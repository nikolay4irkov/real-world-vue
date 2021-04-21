export default (value) => {
  let date = new Date(value);

  return date.toLocaleString("en-US");
};
