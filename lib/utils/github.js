const fetch = require('cross-fetch');

const exchangeCodeForToken = async (code) => {
  // TODO: Implement me!
  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    }),
  });
  const { access_token } = await res.json();
  return access_token;
};

const getGithubProfile = async (token) => {
  // TODO: Implement me!
  const res = await fetch('http://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const { avatar_url, login } = await res.json();
  return { username: login, photoUrl: avatar_url };
};

module.exports = { exchangeCodeForToken, getGithubProfile };
