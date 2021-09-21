const fs = require("fs");

const { getUserPresent } = require("../utils/isUserPresent");
const { JSON_FILE } = require("../utils/constants");

// TODO: Reformat some functions

const createUsers = (req, res) => {
  const data = req.body;
  const id = req.body.id;
  const name = req.body.name;

  // READ json file
  const file = JSON.parse(fs.readFileSync(JSON_FILE, "utf8"));

  // Check if TagID or userID exists in json file
  const isUserPresent = getUserPresent(id, file);

  // If TagID exists, set isPresent => inverse.
  if (isUserPresent) {
    const filterUser = file
      .map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: name,
            isPresent: !user.isPresent,
            date: new Date(),
          };
        }

        return user;
      })
      .sort((a, b) => b.isPresent - a.isPresent);

    fs.writeFile(JSON_FILE, JSON.stringify(filterUser), (err) => {
      if (err) return res.sendStatus(400);
      console.log("User successfuly updated in file!");
    });
  } else {
    // Else we add the Tag Info to the json file + isPresent => true
    fs.writeFile(
      JSON_FILE,
      JSON.stringify(
        [...file, { ...data, isPresent: true, date: new Date() }].sort(
          (a, b) => b.isPresent - a.isPresent,
        ),
      ),
      (err) => {
        if (err) return res.sendStatus(400);
        console.log("User successfuly written to the file!");
      },
    );
  }

  return res.sendStatus(200);
};

module.exports = { createUsers };
