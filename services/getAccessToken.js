module.exports = async function(data) {

    console.log(data);
    const accountService  = 'https://oauth2.googleapis.com'
    const fetch = require('node-fetch');
    try {
      const fetchAPI = await fetch(`${accountService}/token`, {
        method: 'POST',
      });
      const response = await fetchAPI.json();
      return response;
    } catch (error) {
      throw 'Cannot get access token!';
    }

  };
  