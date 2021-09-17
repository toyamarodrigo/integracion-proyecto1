const fs = require('fs');
const { JSON_FILE } = require('../utils/constants');

const getUsers = (req, res) => {
  const data = fs.readFileSync(JSON_FILE, 'utf8');
  return res.send(data.toString());
};

module.exports = { getUsers };
