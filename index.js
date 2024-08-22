const sum = (a, b) => {
  return a + b;
};

const generateError = () => {
  throw new Error("An error occurred");
};

const fetchData = async () => {
  return "Data received";
};

module.exports = { sum, generateError, fetchData };
