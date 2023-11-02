const router = require('express').Router();
const { Traveller, Location } = require("../../models");


router.get("/", async (req, res) => {
    try {
        const data = await Traveller.findAll();
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ "message": "Couldn't get traveller data"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;