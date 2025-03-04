const fs = require('fs');

function getSecret(secretName) {
  try {
    const secret = fs.readFileSync(`/run/secrets/${secretName}`, 'utf8').trim();
    return secret;
  } catch (error) {
    console.error(`Error reading secret ${secretName} with error:`, error);
  }
}

module.exports = { getSecret };