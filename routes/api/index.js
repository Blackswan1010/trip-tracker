const router = require('express').Router();
const travellerRoutes = require("./traveller-routes");
const locationRoutes = require("./location-routes");
const tripRoutes = require("./trip-routes");

router.use("/travellers", travellerRoutes);
router.use("/locations", locationRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
