const request = require('request');

const catQuery = 'https://api.thecatapi.com/v1/breeds/search?q='; //query link for catAPI

request((catQuery + process.argv[2]), (error, response, body) => {
  if (error) {
    console.log('Server error. Please try again.');
  } else if (response.statusCode !== 200) {
    console.log('Page not found.');
  } else {
    const data = JSON.parse(body); //converts JSON string to object
    if (data.length > 0) {
      console.log(data[0].description); //logs description based on search query
    } else {
      console.log('No results found.');
    }
    
  }
});