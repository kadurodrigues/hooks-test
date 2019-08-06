const albumns = require('../../data/albums.json');

const getAlbumById = (req, res) => {
  const album = filterById(parseInt(req.params.id));
  if (!album) return res.status(404).send({ message: 'Album not found' });

  res.send({ status: 200, album });
};

function filterById(id) {
  return albumns.find(album => album.id === id);
}

module.exports = { getAlbumById };
