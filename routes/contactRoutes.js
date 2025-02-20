const express=require('express');
const router=express.Router();
const {getAllContact,
    getSingleContact,
    createContact,
    updateContact , 
    deleteContact}=require('../controller/contactController');

router.route("/").get(getAllContact);
router.route("/:id").get(getSingleContact);
router.route("/").post(createContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);
module.exports = router;