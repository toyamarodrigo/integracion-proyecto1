const app = require("express");

const router = app.Router();
const userController = require("../controllers/user.controller");

router.get("/view", userController.getUsers);
router.get("/view/:id", userController.getUsersById);

module.exports = router;
