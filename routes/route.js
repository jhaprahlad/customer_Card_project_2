const express = require("express")
const router= express.Router()
const customerController= require("../controller/customerController")
const cardController= require("../controller/cardController")

router.post("/createCustomer",customerController.createCustomer)
router.get("/getCustomer",customerController.getCustomer)
router.delete("/deleteCustomer",customerController.deleteCustomer)

router.post("/createCard",cardController.createCard)
router.get("/getAllCards",cardController.getAllCards)


module.exports=router;