const express = require('express');
const Palette = require('../models/Palette');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const palettes = await Palette.find();
    res.json(palettes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { name, colors, createdBy } = req.body;
  const newPalette = new Palette({ name, colors, createdBy });
  try {
    const savedPalette = await newPalette.save();
    res.status(201).json(savedPalette);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id/like', async (req, res) => {
  try {
    const palette = await Palette.findById(req.params.id);
    palette.likes += 1;
    await palette.save();
    res.json({ likes: palette.likes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/popular', async (req, res) => {
  try {
    const palettes = await Palette.find().sort({ likes: -1 }).limit(10);
    res.json(palettes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
