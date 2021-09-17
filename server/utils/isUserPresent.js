const getUserPresent = (userId, file) => {
  return file.map((user) => user.id).includes(userId);
};

module.exports = { getUserPresent };
