const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const catQuery = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; //query link for catAPI

  request(catQuery, (error, response, body) => {
    console.log('error:', error);
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body); //converts JSON string to object
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback(null, 'Breed Not Found');
    }
  });
};


module.exports = { fetchBreedDescription };