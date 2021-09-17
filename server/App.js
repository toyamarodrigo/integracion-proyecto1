const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
const nfcRouter = require('./routes/nfc.routes');
const userRouter = require('./routes/user.routes');

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/nfc', nfcRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  res.sendStatus(404).json({ message: 'No such route exists' });
});

app.use((req, res, next) => {
  res.sendStatus(500).json({ message: 'Internal server error' });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
