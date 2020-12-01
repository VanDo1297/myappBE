module.exports = async function(data) {
    const accountService  = 'https://oauth2.googleapis.com'
    const fetch = require('node-fetch');
    console.log('======================================', data);
    try {
      const fetchAPI = await fetch(`${accountService}/token`, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      const response = await fetchAPI.json();
      return response;
    } catch (error) {
      throw 'Cannot get access token!';
    }
  };
  