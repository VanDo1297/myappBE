const fs = require('fs');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/docs/*', function(req, res) {
  const path = 'public/api/' + decodeURI(req.path).substring(1);
  res.send(fs.readFileSync(path));
});

router.put('/docs/*', function(req, res) {
  const path = 'public/api/' + decodeURI(req.path).substring(1);
  let rawBody = '';
  req.on('data', function(chunk) {
    rawBody += chunk;
  });
  req.on('end', function() {
    fs.writeFileSync(path, rawBody);
    res.send(fs.readFileSync(path));
  });
});

module.exports = router;
