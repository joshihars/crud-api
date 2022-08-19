const express = require("express");
const router = express.Router();

const show = require("../controller/controller.read")
const showOne = require("../controller/controller.read")
const send = require("../controller/controller.register")
const remove = require("../controller/controller.delete")
const update = require("../controller/controller.update")

// Get method to fetch all data
router.get("/", show);
// Get method to fetch  data by id
router.get("/:id", showOne);

//Post method to send the data
router.post("/", send);

//Patch method to update value
router.patch("/:id", update);

//Delete method to delete a value
router.delete("/:id", remove);

module.exports = router;
