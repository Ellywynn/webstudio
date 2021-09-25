const Film = require("../models/Film");
const Genre = require("../models/Genre");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json({ films });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const film = await Film.findOne({ where: { id } });
    res.json({ film });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, year } = req.body;
    if (!title || !year) {
      res.status(500).end();
    }

    await Film.create({ title, year });
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, year } = req.body;
    if (!title || !year) {
      res.status(500).end();
    }

    const film = await Film.findOne({ where: { id } });
    film = req.body;
    film.save();
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await Film.destroy({ where: { id } });
    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
