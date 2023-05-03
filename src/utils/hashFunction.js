// simple modulo function to hash indexes
const hashFunction = (key, map_size) => {
  let sum = 0;
  // loop through string chars and get ASCII
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }

  return sum % map_size;
};

export default hashFunction;
