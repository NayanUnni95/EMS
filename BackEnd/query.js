const querySet = {
  create(type) {
    const category = [];
    return category[type];
  },
  read(selection, tableName, condition, type) {
    const category = [
      `SELECT ${selection} FROM ${tableName};`,
      `SELECT ${selection} FROM ${tableName} WHERE ${condition};`,
    ];
    return category[type];
  },
  update(tableName, values, type) {
    const category = [`INSERT INTO ${tableName} VALUES(${values});`];
    return category[type];
  },
  delete(tableName, type) {
    const category = [];
    return category[type];
  },
};
module.exports = { querySet };
