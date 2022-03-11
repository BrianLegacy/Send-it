const controller = require("../Controllers/controller")
const express = require ('express');
const { Router } = require("express");
const router = express.Router();

router.get('/users',controller.getusers);
router.get('/parcel',controller.getparcels);
router.get('/parcel/:id',controller.getaparcel);
router.get('/parcel/sender_id',controller.getuserparcels);
router.put('/parcel/:id',controller.cancelparcel);
router.post('/parcel',controller.createparcel);
router.post('/users',controller.createuser);
router.post('/login',controller.login);
router.put('/users',controller.updateeuser);
router.put('/parcel',controller.updateparcel);
router.put('/users',controller.deleteuser);
module.exports = router;