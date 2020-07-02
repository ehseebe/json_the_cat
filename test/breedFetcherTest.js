const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {

      assert.equal(err, null); //we expect no error for this scenario

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      assert.equal(expectedDesc, desc); //compare returned description

      done();

    });
  });
  
  it('returns \'Breed Not Found\' when an invalid or non-existent breed is passed in', (done) => { //done is running the test, and when we call it we can stop
    fetchBreedDescription('tabby', (err, desc) => {

      assert.equal(err, null); //we expect an error message for this scenario

      const expectedMsg = 'Breed Not Found';

      assert.equal(expectedMsg, desc); //compare with expected message

      done();
    });
  });
});