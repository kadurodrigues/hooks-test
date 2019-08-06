const artists = require('../controllers/artists');
const albumns = require('../controllers/albums');

module.exports = app => {
  app.use('/api/artists', artists);
  app.use('/api/albums', albumns)
};
