const Genre = require("../models/Genre");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json({ genres });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const genre = await Genre.findOne({ where: { id } });
    res.json({ genre });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { genre } = req.body;
    if (!genre) {
      res.status(500).end();
    }

    await Genre.create({ genre });
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { genre } = req.body;
    if (!genre) {
      res.status(500).end();
    }

    const gen = await Genre.findOne({ where: { id } });
    gen = req.body;
    gen.save();
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await Genre.destroy({ where: { id } });
    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
