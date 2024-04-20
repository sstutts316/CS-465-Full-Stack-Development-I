const express = require("express"); // Express App
const router = express.Router(); // Router Logic

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

// Define route for our trips endpoint
router
  .route("/trips")
  .get(tripsController.tripsList) // GET Method routes tripList
  .post(tripsController.tripsAddTrip); // POST Method routes tripAddTrip

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip); // PUT Method updates a trip

module.exports = router;
