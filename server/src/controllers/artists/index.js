const express = require('express');
const router = express.Router();
const { getArtists, getArtistById } = require('./service');

router.get('/:name', getArtists);
router.get('/:id', getArtistById);

module.exports = router;
