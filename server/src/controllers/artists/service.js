const artists = require('../../data/artists.json');

const getArtists = (req, res) => {
  const artist = filterByName(req.params.name);
  if (!artist) return res.status(404).send({ message: 'Artist not found' });

  res.send({ status: 200, artist });
};

const getArtistById = (req, res) => {
  const artist = filterById(parseInt(req.params.id));
  if (!artist) return res.status(404).send({ message: 'Artist not found' });

  res.send({ status: 200, artist });
};

function filterByName(name) {
  return artists.find(artist =>
    checkString(artist.name.toLowerCase(), name.toLowerCase()) ? artist : ''
  );
}

function checkString(string1, string2) {
  return string1.includes(string2);
}

function filterById(id) {
  return artists.find(artist => artist.id === id);
}

module.exports = { getArtists, getArtistById };
