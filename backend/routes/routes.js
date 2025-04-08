const express = require('express');
const router = express.Router();

let places = [];

router.post('/places', (req, res) => {
    const { place, visit } = req.body;
    const newPlace = { id: places.length + 1, place, visit };
    places.push(newPlace);
    res.status(201).json(newPlace);
});

router.get('/places', (req, res) => {
    res.json(places);
});

router.get('/places/:id', (req, res) => {
    const placeEntry = places.find(p => p.id == req.params.id);
    if (!placeEntry) return res.status(404).json({ message: 'Place not found' });
    res.json(placeEntry);
});

router.put('/places/:id', (req, res) => {
    const placeIndex = places.findIndex(p => p.id == req.params.id);
    if (placeIndex === -1) return res.status(404).json({ message: 'Place not found' });

    places[placeIndex] = { ...places[placeIndex], ...req.body };
    res.json(places[placeIndex]);
});

router.delete('/places/:id', (req, res) => {
    places = places.filter(p => p.id != req.params.id);
    res.json({ message: 'Place deleted' });
});

module.exports = router;
