const { spec, request } = require("pactum");
const args = require('minimist')(process.argv.slice(2));

const baseUrl = args.env;

async function doLogin(username, password) {
  const requestBody = {
    username: username,
    password: password,
  };
  const response = await spec()
    .post(`${baseUrl}/auth/token/login/`)
    .withHeaders("Content-Type", "application/json")
    .withBody(requestBody)
    .expectStatus(200);

  return response.body.access;
}

module.exports = {
    doLogin
};