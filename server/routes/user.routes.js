const app = require('express');
const router = app.Router();
const userController = require('../controllers/user.controller');

router.get('/view', userController.getUsers);

module.exports = router;
