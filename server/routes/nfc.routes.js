const app = require("express");

const router = app.Router();
const nfcController = require("../controllers/nfc.controller");

router.post("/create", nfcController.createUsers);

module.exports = router;
