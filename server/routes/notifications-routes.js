const express = require("express");
const {
  pushNotification,
  markAsRead,
  getNotifications,
} = require("../controllers/notifController");
const authmiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/pushNotification", pushNotification);
router.patch("/markasread/:id", markAsRead);
router.get("/usernotifications", authmiddleware, getNotifications);

module.exports = router;
