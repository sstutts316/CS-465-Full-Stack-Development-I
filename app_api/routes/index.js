const express = require("express"); // Express App
const router = express.Router(); // Router Logic

const { expressjwt: jwt } = require("express-jwt"); // JWT Middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});

require("../models/user");

// This is where we import the controllers we will route
const authController = require("../controllers/authentication");
const tripsController = require("../controllers/trips");

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

// Define route for our trips endpoint
router
  .route("/trips")
  .get(tripsController.tripsList) // GET Method routes tripList
  .post(auth, tripsController.tripsAddTrip); // POST Method routes tripAddTrip

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(auth, tripsController.tripsUpdateTrip); // PUT Method updates a trip

module.exports = router;
