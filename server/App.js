const express = require('express');
const cors = require('cors');
const fs = require('fs');

const port = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post('/write', (req, res, next) => {
  const data = req.body;
  const id = req.body.user;

  // Leer json con tags ids
  const file = fs.readFileSync('./file.json', 'utf8');

  // Buscar si Tag ID en req existe en json.
  const isUserPresent = JSON.parse(file)
    .map((user) => user.user)
    .includes(id);

  // Si existe Tag ID, borrar tag.
  if (isUserPresent) {
    const filterUser = JSON.parse(file)
      .filter((user) => user.user !== id)
      .sort((a, b) => a.user - b.user);
    fs.writeFile('./file.json', JSON.stringify(filterUser), (err) => {
      if (err) return res.sendStatus(400);
      console.log('User removed from file');
    });
  } else {
    // Si no existe Tag ID, agregar al array.
    fs.writeFile(
      `./file.json`,
      JSON.stringify(
        [...JSON.parse(file), data].sort((a, b) => a.user - b.user)
      ),
      (err) => {
        if (err) return res.sendStatus(400);
        console.log('User successfuly written to the file!');
      }
    );
  }

  return res.sendStatus(200);
});

app.get('/read', (req, res) => {
  const data = fs.readFileSync(`./file.json`);
  res.send(data.toString());
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
