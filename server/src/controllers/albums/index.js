const express = require('express');
const router = express.Router();
const { getAlbumById } = require('./service');

router.get('/:id', getAlbumById);

module.exports = router;
