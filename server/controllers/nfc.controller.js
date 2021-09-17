const fs = require('fs');
const { getUserPresent } = require('../utils/isUserPresent');
const { JSON_FILE } = require('../utils/constants');

const createUsers = (req, res) => {
  const data = req.body;
  const id = req.body.id;

  console.log('data :>> ', data);

  // Leer json con tags ids
  const file = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));

  // Buscar si Tag ID en req existe en json.
  const isUserPresent = getUserPresent(id, file);

  // Si existe Tag ID, setear isPresent false.
  if (isUserPresent) {
    const filterUser = file
      .map((user) => {
        if (user.id === id) {
          return { ...user, isPresent: !user.isPresent };
        }
        return user;
      })
      .sort((a, b) => a.id - b.id);

    fs.writeFile(JSON_FILE, JSON.stringify(filterUser), (err) => {
      if (err) return res.sendStatus(400);
      console.log('User removed from file');
    });
  } else {
    // Si no existe Tag ID, agregar al file.
    fs.writeFile(
      JSON_FILE,
      JSON.stringify(
        [...file, { ...data, isPresent: true }].sort((a, b) => a.id - b.id)
      ),
      (err) => {
        if (err) return res.sendStatus(400);
        console.log('User successfuly written to the file!');
      }
    );
  }

  return res.sendStatus(200);
};

module.exports = { createUsers };
