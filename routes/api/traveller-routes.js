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
});

router.get("/:id", async (req, res) => {
    try {
        const data = await Traveller.findByPk(req.params.id, {
            include: [{ model: Location }]
        });
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ "message": "Couldn't get traveller data"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post("/", async (req, res) => {
    try {
        const data = await Traveller.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const data = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        })
        if (data) {
            res.status(200).json({ "message": "Deleted traveller"});
        } else {
            res.status(404).json({ "message": "Couldn't delete traveller"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;