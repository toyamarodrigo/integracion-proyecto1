const fs = require("fs");

const { JSON_FILE } = require("../utils/constants");

const getUsers = (req, res) => {
  const data = fs.readFileSync(JSON_FILE, "utf8");

  return res.send(data.toString());
};

const getUsersById = (req, res) => {
  const { id } = req.params;
  const data = fs.readFileSync(JSON_FILE, "utf8");
  const users = JSON.parse(data);
  const user = users.find((user) => user.id === id);

  return res.send(user);
};

module.exports = { getUsers, getUsersById };
