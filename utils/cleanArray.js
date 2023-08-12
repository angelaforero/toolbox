module.exports = {
  cleanArray: function (arr) {
    return arr.filter((obj) => {
      const values = Object.values(obj);
      const isValidLength = values.length === 4;
      const hasNoEmptyValues = values.every(
        (value) => value !== "" && value !== undefined && !Number.isNaN(value)
      );
      return isValidLength && hasNoEmptyValues;
    });
  },
};
